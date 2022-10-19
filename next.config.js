/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader:'akamai',
    path: "",
    domains: ["lh3.googleusercontent.com", ],
  },
  

}

module.exports = {

  images: {
    unoptimized: true,
},

// basePath: "/kpfcwebsite",
  // assetPrefix: "/kpfcwebsite",

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };


    if (!dev && isServer) {
      config.output.webassemblyModuleFilename = "chunks/[id].wasm";
      config.plugins.push(new WasmChunksFixPlugin());
    }

    return config;
  },
};

class WasmChunksFixPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap("WasmChunksFixPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: "WasmChunksFixPlugin" },
        (assets) =>
          Object.entries(assets).forEach(([pathname, source]) => {
            if (!pathname.match(/\.wasm$/)) return;
            compilation.deleteAsset(pathname);

            const name = pathname.split("/")[1];
            const info = compilation.assetsInfo.get(pathname);
            compilation.emitAsset(name, source, info);
          })
      );
    });
  }
}




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     // loader:'akamai',
//     // path: "",
//     domains: ["lh3.googleusercontent.com",    ],
//   }

// }

// module.exports = {
//   future: {
//     webpack5: true,
//   },
//   webpack: function (config, options) {
//     config.experiments = {};
//     return config;
//   },
// };

// // module.exports={
// //   // context: __dirname,
// //   entry: "./app.js",
// //   output: {
// //         path: __dirname + "/dist",
// //         filename:"bundle.js"
// //   }
  
// // }



// // module.exports = {
// //     webpack5: true, 
      
// //   },
// //   plugins: [
// //     new webpack.DefinePlugin({
// //       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
// //       'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
// //       'process.platform': JSON.stringify(process.platform)
// //     })
// // ],
// //   webpack(config) {
// //     config.resolve.fallback = {
// //       ...config.resolve.fallback, 
      
// //       fs: false, 
      
// //     };


    
// //     return config;
// //   },
// // };