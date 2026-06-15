# Simple Web Server with Node.js

A basic, lightweight multi-page web server built from scratch using Node.js's native `http` module. This project demonstrates core backend development concepts, including dynamic routing, HTTP status codes, handling invalid paths with a custom 404 page, and embedding custom CSS styling without relying on external frameworks like Express.

## 🚀 Features

- **Pure Node.js:** Built completely using built-in standard modules (`http`).
- **Custom Multi-Page Routing:** Dynamically switchboarded logic handling paths for `/home`, `/about`, and `/contact`.
- **Custom 404 Page:** Explicit fallback error-handling that responds with a `404 Not Found` status code and a styled layout for unmapped URLs.
- **Single-File Architecture:** The structural HTML layouts and vanilla CSS stylesheets are streamed directly using `res.write()` statements to maximize efficiency and maintain an asynchronous, modular environment.
- **Enhanced Design:** Designed with custom styling featuring clean container layouts, customized typography (`Trebuchet MS`), rounded borders, and a synchronized pink/yellow palette layout.

---

## 📁 Project Structure

```text
tute_asg6/
└── server.js      # The entire application core logic, server configurations, and HTML payloads
