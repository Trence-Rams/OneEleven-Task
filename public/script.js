async function testApi() {
  const url = document.getElementById("apiUrl").value;
  const email = document.getElementById("email").value;

  if (!url || !email) {
    alert("Please enter both URL and email");
    return;
  }

  document.getElementById("response").innerHTML = "Testing...";

  const validatorUrl = `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task?url=${encodeURIComponent(url)}&email=${encodeURIComponent(email)}`;

  try {
    const response = await fetch(validatorUrl);
    const data = await response.json();
    document.getElementById("response").innerHTML = JSON.stringify(
      data,
      null,
      2,
    );
  } catch (error) {
    document.getElementById("response").innerHTML = "Error: " + error.message;
  }
}
