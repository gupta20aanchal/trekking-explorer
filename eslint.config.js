export default [
  {
    ignores: ["node_modules", "dist", "build"],
  },
  {
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "no-console": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
