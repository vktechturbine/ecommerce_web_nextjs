/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        
        domains:["cdn.pixabay.com"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "as1.ftcdn.net",
              port: '',
              pathname: '/v2/jpg/01/45/19/76/1000_F_145197600_rYWzKzMBC69xds3FAPvAWHV6fwITY8ZF.jpg',
            },
          ],
        
    }
}

module.exports = nextConfig
