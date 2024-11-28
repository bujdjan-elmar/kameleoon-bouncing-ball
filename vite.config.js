export default {
  base: "/kameleoon-bouncing-ball/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[name].[hash].[ext]",
        chunkFileNames: "[name].[hash].js",
        entryFileNames: "[name].js",
      },
    },
  },
};
