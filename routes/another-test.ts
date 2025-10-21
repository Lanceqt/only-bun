import { html } from "../lib/html";

export function render_user_page(user: { name: string; email: string }) {
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>User Profile</title>
      </head>
      <body>
        <h1>Welcome ${user.name}</h1>
        <p>your email is: ${user.email}</p>
        <p>Current time: ${new Date()}</p>
      </body>
    </html>
  `;
}
