import fs from "fs";
import path from "path";

const resultCount = process.argv.slice(2)[0] || 254;

const serverDescriptors = [
  "App Server",
  "Repository",
  "Build Server",
  "Web Server",
  "Proxy",
  "Elasticsearch",
  "Oracle Database",
  "PostgreSQL Database",
  "Tomcat Server",
  "Mesos Server",
] as const;

type ServerDescriptor = typeof serverDescriptors[number];
type ServerNumber = number;
type ServerDescription = `${ServerDescriptor} ${ServerNumber}`;

const descriptors: { descriptor: ServerDescriptor; count: ServerNumber }[] =
  serverDescriptors.map((e) => ({ descriptor: e, count: 0 }));

const results: ServerDescription[] = [];

for (let i = 0; i < resultCount; i++) {
  const descriptor =
    descriptors[Math.floor(Math.random() * descriptors.length)];
  descriptor.count++;
  const result: ServerDescription = `${descriptor.descriptor} ${descriptor.count}`;
  results.push(result);
}

fs.writeFileSync(path.join(__dirname, "descriptions.txt"), results.join("\n"));
