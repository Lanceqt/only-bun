import { html } from "../lib/html";

export function render_user_page(user: { name: string; email: string }) {
  function output_posts() {
    let num: number = 0;
    const posts: string[] = [];
    while (num <= 4) {
      num++;
      posts.push(html`<p>${num}</p>`);
    }
    return posts.join("\n");
  }

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
        ${output_posts()}
      </body>
    </html>
  `;
}
