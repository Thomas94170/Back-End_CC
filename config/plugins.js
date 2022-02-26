module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('thomas-thirion'),
        api_key: env('784933485352314'),
        api_secret: env('da6GUP6Cp2lRmr9xnbPc1pS8Hn4'),
      },
    },    
  });