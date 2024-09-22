import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
      minTimeout: 100,
      maxTimeout: 1000,
    });

    async function fetchStatusPage(bail, tryNumber) {
      console.log("tryNumber", tryNumber);
      const response = await fetch("http://localhost:3000/api/v1/status");

      const responseBody = await response.json();
    }
  }
}

export default {
  waitForAllServices,
};