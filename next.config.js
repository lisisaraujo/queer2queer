/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZGFsYWxhbWFkIiwiYSI6ImNsZXk3OXIwNDBrcW8zcm4wNGx0c3JiZm0ifQ.JUyYd7DDfX7U3VxqY9b_KA",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
