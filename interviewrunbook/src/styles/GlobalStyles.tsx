import React from 'react';

export default function GlobalStyles() {
  return (
    <style jsx global>
      {`
          .nav-link {
            color: white;
          }
          .active {
            color: green !important;
          }
          .navbar-expand {
            flex-wrap: nowrap;
            justify-content: space-between;
        }
          .nav-container{
            margin-right: 20px;
            margin-left: 20px;
          }
          
          .nav-link:hover{
            color: green;
          }
          .footer {
            background-color: purple;
            font-size: 20px;
            color: white;
            border-top: 1px solid #e7e7e7;
            text-align: center;
            padding: 20px;
            position: fixed;
            left: 0;
            bottom: 0;
            height: 60px;
            width: 100%;
          }
          .blue-colorr {
            color: blue;
          }

          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            // background-color: #f4f4f4;
        }
        
          .container {
              max-width: 800px;
              margin: 2em auto;
              padding: 2em;
              background-color: #fff;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
          h1 {
              color: #333;
        }
          p {
              line-height: 1.6;
        }
          pre {
              background-color: #282c34;
              color: #61dafb;
              padding: 1em;
              overflow-x: auto;
        }
          code {
              font-family: 'Courier New', Courier, monospace;
        }
          footer {
              text-align: center;
              padding: 1em 0;
              background-color: #333;
              color: #fff;
        }
         
        
            
          
        `}
    </style>
  );
}
