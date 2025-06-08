const { spawn } = require("child_process");
const path = require("path");

const services = [
  { name: "UserService", path: "../UserService", port: 4001 },
  { name: "ProductService", path: "../ProductService", port: 4002 },
  { name: "ComplaintService", path: "../ComplaintService", port: 4003 },
  { name: "NotificationService", path: "../NotificationService", port: 4004 },
  { name: "OrderService", path: "../OrderService", port: 4005 },
];

services.forEach((service) => {
  const proc = spawn("node", ["app.js"], {
    cwd: path.join(__dirname, service.path),
    stdio: "pipe",
    shell: true,
  });

  proc.stdout.on("data", (data) => {
    console.log(`[${service.name}] ${data.toString().trim()}`);
  });

  proc.stderr.on("data", (data) => {
    console.error(`[${service.name}] Error: ${data.toString().trim()}`);
  });

  console.log(`Started ${service.name} on port ${service.port}`);
});

console.log("All services are running. Press Ctrl+C to stop all services.");
