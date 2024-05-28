import React, { useEffect } from "react";

function generateCSS(classNames, styles) {
  let cssContent = "";

  classNames.forEach((className) => {
    cssContent += `
      .${className} {
        ${styles.base}
      }

      @media screen and (max-width: 767px) {
        .${className} {
          ${styles.small}
        }
      }

      @media screen and (min-width: 768px) and (max-width: 1023px) {
        .${className} {
          ${styles.medium}
        }
      }

      @media screen and (min-width: 1024px) {
        .${className} {
          ${styles.large}
        }
      }
    `;
  });

  return cssContent;
}

function downloadCSSFile(cssContent, filename) {
  const blob = new Blob([cssContent], { type: "text/css" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}

// Example usage:
export default function App() {
  const customStyles = {
    base: `
      padding-inline: 20px;
      display: flex;
      background-color: blue;
      justify-content: space-between;
    `,
    small: `
      padding-inline: 10px;
      flex-direction: column;
    `,
    medium: `
      padding-inline: 15px;
    `,
    large: `
      padding-inline: 20px;
    `,
  };

  const classNames = ["App", "AnotherComponent", "SomeOtherComponent"]; // Array of classNames
  const cssContent = generateCSS(classNames, customStyles);

  useEffect(() => {
    downloadCSSFile(cssContent, "styles.css");
  }, [cssContent]);

  return (
    <div>
      <div className="App">
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
      <div className="AnotherComponent">
        <h1>Another Component</h1>
      </div>
      <div className="SomeOtherComponent">
        <h1>Some Other Component</h1>
      </div>
    </div>
  );
}
