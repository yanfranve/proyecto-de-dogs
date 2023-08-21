// name: Backend PR Preview

// on:
//   pull_request:
//     types:
//       - opened

// jobs:
//   build:
//     runs-on: ubuntu-latest

//     steps:
//       - name: Checkout code
//         uses: actions/checkout@v2

//       - name: Set up Node.js
//         uses: actions/setup-node@v2
//         with:
//           node-version: '14'

//       - name: Deploy to Fly.io
//         run: |
//           flyctl deploy
//           flyctl open # Abre el navegador con la URL de la aplicación
//         env:
//           FLY_API_TOKEN: ${{secrets.FLY_API_TOKEN}} # Configura este secreto en la configuración de tu repositorio en GitHub

//       - name: Display PR URL
//         run: |
//           app_url=$(flyctl status --json | jq -r '.urls[0]')
//           echo "PR Preview URL: $app_url"
