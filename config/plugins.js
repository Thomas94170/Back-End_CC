module.exports = ({ env }) => {

  // TODo -> delete afterwards
  console.log('Cloudinary Information ->', {
    cloud_name: env("CLOUDINARY_NAME"),
    api_key: env("CLOUDINARY_API_KEY"),
    api_secret: env("CLOUDINARY_API_SECRET"),
  });

  return ({
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_API_KEY"),
        api_secret: env("CLOUDINARY_API_SECRET"),
      },
    },
  });
};
