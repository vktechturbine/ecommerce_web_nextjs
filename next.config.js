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
            {
              protocol: 'https',
              hostname: "themewagon.github.io",
              port: '',
              pathname: '/restoran/img/about-1.jpg',
            },
            {
              protocol: 'https',
              hostname: "themewagon.github.io",
              port: '',
              pathname: '/restoran/img/about-2.jpg',
            },
            {
              protocol: 'https',
              hostname: "themewagon.github.io",
              port: '',
              pathname: '/restoran/img/about-3.jpg',
            },
            {
              protocol: 'https',
              hostname: "themewagon.github.io",
              port: '',
              pathname: '/restoran/img/about-4.jpg',
            },
            {
              protocol: 'https',
              hostname: "themewagon.github.io",
              port: '',
              pathname: '/restoran/img/about-1.jpg',
            },
          ],
        
    }
}

module.exports = nextConfig
