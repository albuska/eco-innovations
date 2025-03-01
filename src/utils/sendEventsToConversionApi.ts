"use client";

import { createHash } from "crypto";
import axios from "axios";

interface ILocationData {
  ip: string | undefined;
  city: string | undefined;
  region: string | undefined;
  country: string | undefined;
  zipcode: string | undefined;
  state: string | undefined;
}

const access_token =
  "EAAMoseHKqZC4BO1PWNvOgVA89fs5XgXnRvEVYqaN2VzIH3iqOkvj5BgMyatejWwMXik8lBBx7IuIARUQGANvWrEKbNXa0mC3r47kG8PjkvIptDpQzB4EtAidjWKiDk5Vc54glSDyVsX8Lam5yeOd6hbifX6xoLEpajQmAz9s1d3I1EsNhwSHvFACnt0M75QZDZD";
const pixel_id = "1617323338842246";
const url = `https://graph.facebook.com/v19.0/${pixel_id}/events`;

const getCookieByKey = (key: string) => {
  if (typeof window !== "undefined") {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${key}=`))
      ?.split("=")[1];
  }
};

const fbpCookie = getCookieByKey("_fbp");

export const getLocationData = async () => {
  let locationData: ILocationData = {
    ip: "",
    city: "",
    region: "",
    country: "",
    zipcode: "",
    state: "",
  };
  const cookieIp = getCookieByKey("ip");

  const clientIP = await axios.get("https://api.ipify.org/?format=json");
  if (clientIP.data.ip === cookieIp) {
    locationData = {
      ip: getCookieByKey("ip"),
      city: getCookieByKey("city"),
      region: getCookieByKey("region"),
      country: getCookieByKey("country"),
      zipcode: getCookieByKey("zipcode"),
      state: getCookieByKey("state"),
    };
  } else {
    await axios
      .get("https://ipinfo.io/json?token=ee40c07fb51963")
      .then((response) => {
        locationData = {
          ip: response.data.ip,
          city: response.data.city,
          region: response.data.country,
          country: response.data.country,
          zipcode: response.data.postal,
          state: response.data.region,
        };
      })
      .catch(async () => {
        await axios
          .get("https://ipinfo.io/json?token=eba5da567f5208")
          .then((response) => {
            locationData = {
              ip: response.data.ip,
              city: response.data.city,
              region: response.data.country,
              country: response.data.country,
              zipcode: response.data.postal,
              state: response.data.region,
            };
          })
          .catch(console.log);
      });

    const date = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();

    Object.keys(locationData).forEach((key) => {
      document.cookie = `${key}=${
        locationData[key as keyof ILocationData]
      }; expires=" + ${date}`;
    });
  }

  return locationData;
};

export const sendEventToConversionApi = async (eventName: string) => {
  const userLocationData = await getLocationData();
  const userAgent = navigator.userAgent;

  const hashedCity =
    userLocationData.city &&
    createHash("sha256").update(userLocationData.city).digest("hex");
  const hashedRegion =
    userLocationData.region &&
    createHash("sha256")
      .update(userLocationData.region.toLocaleLowerCase())
      .digest("hex");
  const hashedZipCode =
    userLocationData.zipcode &&
    createHash("sha256").update(userLocationData.zipcode).digest("hex");
  const hashedCountry =
    userLocationData.country &&
    createHash("sha256").update(userLocationData.country).digest("hex");

  const data = [
    {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      user_data: {
        ct: hashedCity,
        st: hashedRegion,
        zip: hashedZipCode,
        country: hashedCountry,
        client_ip_address: userLocationData.ip,
        client_user_agent: userAgent,
        fbc: fbpCookie,
      },
      event_source_url: "https://smart.ua.e-si-energy",
      action_source: "website",
    },
  ];

  const requestData = { data: data };

  await axios
    .post(url, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        access_token: access_token,
      },
    })
    .catch(async (error) => {
      console.error("Error:", error.response.data);
    });
};
