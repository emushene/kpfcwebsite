/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports={
  // context: __dirname,
  entry: "./app.js",
  output: {
        path: __dirname + "/dist",
        filename:"bundle.js"
  }
  
}



// module.exports = {
//     webpack5: true, 
      
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
//       'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
//       'process.platform': JSON.stringify(process.platform)
//     })
// ],
//   webpack(config) {
//     config.resolve.fallback = {
//       ...config.resolve.fallback, 
      
//       fs: false, 
      
//     };


    
//     return config;
//   },
// };