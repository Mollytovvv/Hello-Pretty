function ConfirmationEmail({ movie, date, time, posterUrl }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />

        <title>Hello Pretty</title>

        <style>
          :root {
            color-scheme: dark;
          }

          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            background-color: #08080c !important;
          }

          body {
            color: #ffffff !important;
            font-family: Arial, Helvetica, sans-serif !important;
          }

          table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
          }

          img {
            border: 0 !important;
            outline: none !important;
            text-decoration: none !important;
          }

          @media only screen and (max-width: 600px) {
            .email-wrapper {
              padding: 24px 12px !important;
            }

            .email-container {
              border-radius: 20px !important;
            }

            .email-content {
              padding-left: 22px !important;
              padding-right: 22px !important;
            }

            .email-title {
              font-size: 36px !important;
            }

            .movie-title {
              font-size: 25px !important;
            }

            .movie-details {
              padding: 20px !important;
            }
          }

          @media (prefers-color-scheme: light) {
            body,
            .email-wrapper {
              background-color: #08080c !important;
              color: #ffffff !important;
            }

            .email-container {
              background-color: #111116 !important;
            }

            .movie-details {
              background-color: #19191f !important;
            }

            .primary-text {
              color: #ffffff !important;
            }

            .secondary-text {
              color: #aaaab5 !important;
            }

            .muted-text {
              color: #777783 !important;
            }

            .footer-text {
              color: #555560 !important;
            }
          }
        </style>
      </head>

      <body>

        <!-- OUTER BACKGROUND -->

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          class="email-wrapper"
          style="
            width: 100%;
            background-color: #08080c;
            padding: 40px 16px;
          "
        >
          <tr>
            <td
              align="center"
              style="background-color: #08080c;"
            >

              <!-- MAIN CONTAINER -->

              <table
                role="presentation"
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                class="email-container"
                style="
                  width: 100%;
                  max-width: 560px;
                  background-color: #111116;
                  border: 1px solid #29292f;
                  border-radius: 24px;
                  overflow: hidden;
                "
              >

                <!-- HEADER -->

                <tr>
                  <td
                    class="email-content"
                    style="
                      padding: 42px 32px 28px;
                      text-align: center;
                      background-color: #111116;
                    "
                  >

                    <p
                      class="muted-text"
                      style="
                        margin: 0 0 14px;
                        color: #9696a3;
                        font-size: 11px;
                        line-height: 1.4;
                        letter-spacing: 4px;
                        text-transform: uppercase;
                      "
                    >
                      HELLO PRETTY
                    </p>

                    <h1
                      class="email-title primary-text"
                      style="
                        margin: 0;
                        color: #ffffff;
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 42px;
                        font-weight: 400;
                        line-height: 1.15;
                      "
                    >
                      It's a date. ❤️
                    </h1>

                    <p
                      class="secondary-text"
                      style="
                        margin: 18px 0 0;
                        color: #aaaab5;
                        font-size: 15px;
                        line-height: 1.6;
                      "
                    >
                      You said yes to movie date.
                    </p>

                  </td>
                </tr>

                <!-- POSTER -->

                ${
                  posterUrl
                    ? `
                      <tr>
                        <td
                          align="center"
                          style="
                            padding: 0 32px 30px;
                            background-color: #111116;
                          "
                        >

                          <img
                            src="${posterUrl}"
                            alt="${movie} poster"
                            width="180"
                            style="
                              display: block;
                              width: 180px;
                              max-width: 100%;
                              height: auto;
                              margin: 0 auto;
                              border-radius: 14px;
                            "
                          />

                        </td>
                      </tr>
                    `
                    : ''
                }

                <!-- MOVIE DETAILS -->

                <tr>
                  <td
                    class="email-content"
                    style="
                      padding: 0 32px 32px;
                      background-color: #111116;
                    "
                  >

                    <table
                      role="presentation"
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      class="movie-details"
                      style="
                        width: 100%;
                        background-color: #19191f;
                        border: 1px solid #29292f;
                        border-radius: 18px;
                      "
                    >
                      <tr>
                        <td
                          style="
                            padding: 24px;
                            text-align: center;
                            background-color: #19191f;
                          "
                        >

                          <p
                            class="muted-text"
                            style="
                              margin: 0 0 10px;
                              color: #777783;
                              font-size: 10px;
                              line-height: 1.4;
                              letter-spacing: 3px;
                              text-transform: uppercase;
                            "
                          >
                            MOVIE DATE
                          </p>

                          <h2
                            class="movie-title primary-text"
                            style="
                              margin: 0 0 14px;
                              color: #ffffff;
                              font-family: Georgia, 'Times New Roman', serif;
                              font-size: 28px;
                              font-weight: 400;
                              line-height: 1.2;
                            "
                          >
                            ${movie}
                          </h2>

                          <p
                            class="secondary-text"
                            style="
                              margin: 0;
                              color: #aaaab5;
                              font-size: 14px;
                              line-height: 1.5;
                            "
                          >
                            ${date}
                          </p>

                          <p
                            class="secondary-text"
                            style="
                              margin: 8px 0 0;
                              color: #aaaab5;
                              font-size: 14px;
                              line-height: 1.5;
                            "
                          >
                            ${time}
                          </p>

                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- MESSAGE -->

                <tr>
                  <td
                    class="email-content"
                    style="
                      padding: 0 32px 38px;
                      text-align: center;
                      background-color: #111116;
                    "
                  >

                    <p
                      class="primary-text"
                      style="
                        margin: 0;
                        color: #ffffff;
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 18px;
                        line-height: 1.6;
                      "
                    >
                      I love you Pretty Girl! ❤️
                    </p>

                  </td>
                </tr>

                <!-- FOOTER -->

                <tr>
                  <td
                    style="
                      padding: 22px 32px;
                      border-top: 1px solid #29292f;
                      text-align: center;
                      background-color: #111116;
                    "
                  >

                    <p
                      class="footer-text"
                      style="
                        margin: 0;
                        color: #555560;
                        font-size: 11px;
                        line-height: 1.5;
                      "
                    >
                      Made with a little bit of effort from your software engineer. ❤️
                    </p>

                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </body>
    </html>
  `
}

export default ConfirmationEmail
