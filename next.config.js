/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "img.freepik.com",
            },
            {
              protocol: 'https',
              hostname: "media.istockphoto.com",
            },
            {
              protocol: 'https',
              hostname: "as1.ftcdn.net",
              port: '',
              pathname: '/v2/jpg/01/45/19/76/1000_F_145197600_rYWzKzMBC69xds3FAPvAWHV6fwITY8ZF.jpg',
            },
            {
              protocol: 'https',
              hostname: "themewagon.github.io",
            },
          ],
        
    }
}

module.exports = nextConfig
