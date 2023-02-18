# secret-storage

~~~~~ sh
npm install e53e04ac/secret-storage
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "devDependencies";
    B_0(["@types/node"]);
  end;
  A ----> B_0;
  click B_0 "https://www.npmjs.com/package/@types/node/v/18.14.0";
~~~~~

~~~~~ mermaid
graph RL;
  M(["index.mjs"])
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/secret-storage";
    E_0(["namespace SecretStorage"]);
  end;
  M(["index.d.ts"])
  E_0 ----> M;
~~~~~
