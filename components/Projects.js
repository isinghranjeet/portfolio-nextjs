// import { useState, useMemo, useCallback } from 'react';
// import useAOS from '../hooks/useAOS';

// const Projects = () => {
//   useAOS();
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Tech stack icons mapping - keeping it simple and clean
//   const techIcons = {
//     // Frontend
//     'React': 'fab fa-react',
//     'Vue.js': 'fab fa-vuejs',
//     'Angular': 'fab fa-angular',
//     'Next.js': 'fas fa-bolt',
//     'React Native': 'fab fa-react',
    
//     // Backend
//     'Node.js': 'fab fa-node-js',
//     'Spring Boot': 'fas fa-leaf',
//     'Python': 'fab fa-python',
    
//     // Databases
//     'MongoDB': 'fas fa-database',
//     'Firebase': 'fas fa-fire',
//     'MySQL': 'fas fa-database',
    
//     // APIs & Services
//     'REST API': 'fas fa-cloud',
//     'WebSocket': 'fas fa-plug',
//     'CoinGecko API': 'fas fa-chart-line',
//     'Google Maps API': 'fas fa-map-marker-alt',
//     'WebRTC': 'fas fa-video',
    
//     // Payment
//     'Stripe': 'fab fa-stripe',
//     'Payment Gateway': 'fas fa-credit-card',
    
//     // UI & Styling
//     'CSS3': 'fab fa-css3-alt',
//     'Material UI': 'fas fa-palette',
    
//     // State Management & Tools
//     'Redux': 'fas fa-code-branch',
//     'Chart.js': 'fas fa-chart-bar',
//     'D3.js': 'fas fa-chart-area',
    
//     // Mobile
//     'Flutter': 'fas fa-mobile-alt',
//     'TensorFlow': 'fas fa-brain'
//   };

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Website",
//       description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
//       image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//       category: "web",
//       featured: true,
//       links: {
//         view: "#",
//         demo: "",
//         github: "https://github.com/example/ecommerce"
//       }
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
//       image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
//       technologies: ["Vue.js", "Firebase", "CSS3", "Chart.js"],
//       category: "web",
//       featured: false,
//       links: {
//         view: "scintillating-pie-157e81.netlify.app/",
//         demo: "scintillating-pie-157e81.netlify.app/",
//         github: "https://github.com/isinghranjeet/Task-Manager"
//       }
//     },
//     {
//       id: 3,
//       title: "Fitness Tracker App",
//       description: "Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
//       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//       technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
//       category: "mobile",
//       featured: true,
//       links: {
//         view: "#",
//         demo: "https://fitness-demo.vercel.app/",
//         github: "https://github.com/example/fitness-tracker"
//       }
//     },
//     {
//       id: 4,
//       title: "Social Media Dashboard",
//       description: "Analytics dashboard for tracking social media performance with real-time metrics and data visualization.",
//       image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
//       technologies: ["React", "D3.js", "REST API", "Material UI"],
//       category: "web",
//       featured: false,
//       links: {
//         view: "https://school-taupe-eight.vercel.app/",
//         demo: "https://school-taupe-eight.vercel.app/",
//         github: "https://github.com/example/social-dashboard"
//       }
//     },
//     {
//       id: 5,
//       title: "Travel Booking Platform",
//       description: "Comprehensive travel booking system with flight, hotel, and car rental search and reservation capabilities.",
//       image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//       technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
//       category: "web",
//       featured: true,
//       links: {
//         view: "#",
//         demo: "",
//         github: ""
//       }
//     },
//     {
//       id: 6,
//       title: "Food Delivery App",
//       description: "Mobile application for food ordering and delivery with real-time tracking and multiple payment options.",
//       image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80",
//       technologies: ["Flutter", "Firebase", "Google Maps API", "Payment Gateway"],
//       category: "mobile",
//       featured: false,
//       links: {
//         view: "lively-faloodeh-f07528.netlify.app/",
//         demo: "lively-faloodeh-f07528.netlify.app/",
//         github: "https://github.com/isinghranjeet/Food-Dilivery-App"
//       }
//     },
//     {
//       id: 7,
//       title: "Crypto Tracker Dashboard",
//       description: "Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and market analysis.",
//       image: "data:image/jpeg;base64,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",
//       technologies: ["Vue.js", "WebSocket", "CoinGecko API", "Chart.js"],
//       category: "web",
//       featured: true ,
//       links: {
//         view: "#",
//         demo: "#",
//         github: "#"
//       }
//     },
//     {
//       id: 8,
//       title: "Healthcare Management System",
//       description: "Comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine consultations.",
//       image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMWFRUXGBcXFRcVFRUVFRcYFRUWFhUXFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0mHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEIQAAEDAgMFBQYEBAQFBQAAAAEAAhEDIQQSMQVBUWFxIoGRobEGEzJSwdEjQuHwFHKComKS0vEHM0NTshUWY5PC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EAC0RAAICAgIBAgIKAwAAAAAAAAABAhEDIRIxBBNBIlEFQmFxgZGhscHwFDJD/9oADAMBAAIRAxEAPwBzgm9oEblqdm1xviVkcGx8y1M8DXLHX7wV1MkbPO4MnBmnw1OS8jXcYQz9kAy78xvPXcjNn1S8SRHBGgLJycWdRY4zWzN7X2a1rQ82OYHjHJV7P2GHuDzAabi2sfqtFj2yATEA3BVtJzfIdyL1ZKIt+NBztmY2n7OAg3E8FlsTseHclutsYlxIglrWm+lzuiUPVwYfcgyQNP3qnQyyS2Zc3jwlJ8BDgNjUiWz5JuNhUyeyTbVWUsIQLDTTimOEoQ0ybm5VTyP2YWLBHpoV4jZ7CSGiDHC3ikWP2TrxWudTDUNWZmMDqpDI0TLgi/vMI/AGYC9GAcDcLbNwTT8TRO5UYjZx3QAm+sjM/Fa2ZluDgaKzC0L3Cd1aAH1QtS1kSnYDx8ewOtT5Kt1JOcPs55aajxkptBc57rQBckDUq7B+z5xID6hdSpm7KbYkN3OqO3vI3bp3JU86jo04fDll29I89kNlZne/cJaz4Obxv/p9eiZe1jnBtB40bUGbo9rmf+Tmp0KLadMMYIa0QBwACr2hhBVpOpne2J4EGQe4gHuWHNJ5LOx4uOOCkjIY6iHid6VOo7inTWmIdqLHqNUFiKa5LR3IsTV6KrFOAmNSioMw+dwbIA3k2AG8lSrdItutsA2HsZ1fFMquH4VEyTudU1a0dBc93FbvDsB97aQYEbjaD6KVSmykxrGfC0SOc2nvuVfg6cUhzv46eS6eHHwjRy8uTm7MHtXZYo1CB8Bu3pwPT7KhtNOvbQ1WU21KbM7WuJqjeGZTLm8wY7pQmCwTqlJten26btSPiaRqHN3Rx7108WdSVS7PO+V4UoScoK4/sU4fDE3hHfwlhOqY4MWCp2vUi3mi5tuhPppRsX1sPl1shahG5dVqk6lRYmCmWUKJ1hNsPG8IvBNYWi9hYK2tSAFrpUp+xphipWDVHgL0VrId9EmRCFq5h3KJJguTRZiyCgwQoVqyFNRNSEt2xrg5aDYptRpB1IkAA8d6vwNNrmgx15omlTDW2HVZpTNePFr7AjZTjAnhomOZIe0DIumIqHJO/ekTXubcU9UWVa0leGoeKENRd71BQ6woYVtQQ6/7sq8VLABEjSP1XmFrQ7lv6K2tiGkQQVabAklWuwLC03El0mJ69yYVeRVWHqDKQLHVcXo+2K1FUC182q9wjhrvV5KBq9kzuR1aFXUrGRAIlU0sM4yACR+968weIaPiB6W87onEY8FhDAQY6W3xG+JSW2ujXGCltiqvgpd8cAbm7+8ojD0Gsu0X4m58ToqGVFVUxapykxkcUI7SI+0G0fePoYWfjeDU5sYHPI78g8VqaBsF8xwWMNbabXNINOmHNzWiSGtInjIdHVfSKeKbGhQ0M5Jdl2I+E9Cst7V7Td+HTY6A4mYMSI9JKf4rES10ax/v5LGbabLsPPB89wEjxVpBRdltKm5rRJJtH2M8x6FVkyrdqYnJSBOoc0dZMKqgJIP7hc/yI/GdHxpXHZ3u1GlgszHWu4wJ4N/3PgjC1Etpy0AW+L0BKnjx+MvyJ/BoBwzppe6BJJqCkOIBAcb8g5x7lrCyBA3WSnZmzwHtIEBoLj/M/sjvgP8AFOnhdE5z7Fr6AJg6H6rJ+yzzgsfUwZtSqj3lHkYJgdwcP6GraGndY7/iLQcz3OKZ8VGp5H8Qebcv9SplGvxmzWVL3aeLdD/MN6TbW2HWIlmV8cDDvA/dPsNWD2te3RwDh0IkIhpRxySiIyeNjydqvuPl9YFpLXAgjUEQR1BUBUX0PbGzKVcQ8Q7c8fEPuORWL2l7OYilcN943c5gk97dR6LZjzRl3pnJz+HPHtbQPRxUb4KYYTHbj3JAxGBNaTM0ZNDupi94QT8aHGIQLnkqiq6FSignNssxJEoWVCo9VyiBo12zMTBF7b09GIGWQe5Y/DSDyRH8WkTx2x2LO4Kh9/H/AC67xuTHD1J6LJ0cQCQtBTr9kFLnCjRhytvZbWYQeSpfPA+BQ/8AGF03Xn8Rz80vgaPVQYKkCN5ufoFxfKGfUkTvFj9Cotqq1EBz2FitBtuRRdIkaH9kJTnkwEDjMYSbE5RYbu/vU6KvkaFs8D4IfFPuG8LnruH1SN7nNE5iY111mEbQrZ2Zt4s7po1308OKpsKEFYQ16kKkEHeEGKqk0lzgBqdEND1IltKpF2/DE8m8QeEekLD4vG1sbUNChLaTT+I8A+AG88vFaP2pxFUBtCkDD+yXcSbnp3/RN9hbJZh6QY0X1ceJ3lX6QL8lWZil7E+5ptfTe733xGdCdQCN2gT7YO2KtYFhgObGaRc3I04ggg9OafV2S2eFj9D9PBZqvgnU8S2sww1xBc0CZ/K+eUZT1arqiOfJ2Oyasjt232Gio2pgC5zKjR2YIgCYLi2fTzRlSSIG+AmDR2QBu/cqpKw4z4mX23g3PovbBsA8W+R0+gUNnNhgnUp/iXQypPynyaUopsssXkQqSZ0PGzXFokBeAiXNsQNwjqTr9F7gacunh9bfdMsDQsCRzHUk380eCFLkBnyW+JJ+LZRa3NMkaAcEOdssOrHAdxR2LoNcBO4+tvsh62EbpCeuNC9kaW0KJ/P4ghJfbusx2EqFvaPYMfyvDvQJzT2c2dEDt9rR7unEy6SOQH6qa9iwf2AxWfB02zenmpGf/jcWt/tyrSvIbHE2CwX/AA0qZHYnDuN2PBvraaLvOjP9S2lR81Wjg0+f+yEhN7rrqD4cPHwVFV3aUi6xPd4qEMBt/D+7rvaLAnM3o6/kZHcgBUstH7W4eWNqj8pg9HaeY/uWVldDDPlBM4Hk4vTytF7a0BUPK8leFNEEVINXoapBqhdjp9YEQqHlUZoXjqqqhbYVhnwZTKg4uBg3+iRCommynkEnkhktBwlui3D2J4Kw1FOvRMy0WN0M6i/5Urs0XxCqVeJJ0Avz4DxhVDHt+U/5v0QOJeZFPmJ/mP2n1RtJttfyEiw0DWSfXxQMdF62WNxYcHNaCHEGLzO8gW1In03oAXIA3kAd9ldjwWkOBuOFolzy0+XkvDhnvh9Ntje0DK4agcpuOqALkkFbWo5ALaxw1ueHI/qrNkMJf/hDTn5g2jqTEeO5DOwmIeWgtJjm3d3p3hMNkaGfmJBd1OgngAfMqcbdFrKoRcvwK3Yanwd/mH2VuGpMaZEgwYJM9d3CUbVwQFtTbjv5DQW1QmIpAObGkBx5cBzv6c0ScHpAy9aKuXXuQpUQTnIv+Wdw3d+/vRbVJwmHCL63Avvid2/vXgYeX+Zv3R2hFS9kSdVDQSfhAvz3R1JhLf4trgR7smxPxcNfyqrbWJgikN0F3NxEjuAPmVLAVQym51y53ZywYIOvaFtJss85W9HSw46jsN2fjGvtEEggEmb+G+6Np1xobeizlVop1IbIBa17Z+IZhoelk+ou940O42O641j171IO+yZYe6PNqf8ALeR8p9EuZAHJM8hAym7TbUJNiQQ/3fDzkW8knyF0P8V92NNlvEExv4/omAxTAb24b/JJadQwGMtxO88eiJZTDevFHGNRSZcpXKw2tWe6zRA4nXw3IlrVHC9oSrmhUxh7CTYyhNcOOmW3iZTioUBiBJB4KIhhsG73G2CNBWaR/maHt/up1fFbgH8XuHqVhPbl3usThsT8rgT0p1Gk/wBlSqt1h7vJ6KyEKzu2R0VlX4QO9D1T+K7u9ERWVEF+MwwqMcw/mBHTgfGF88e0gkGxBII4EWK+llYr2nwuWsXDR4zd+jvoe9aPGlT4nP8ApHHcVP5aEpcuDl49qhBC3HGsLoG6IhAMdCJbVCqi7LKhVZnVWZJRNOnZUCCtCd7IbvQtPDyOe5NsLhC0QOt0Mmug4Rd2EOUcqkQuhWkLnIA2lQAy1QPhIzdJsfp4IcYymABf4HM03uAGbXgNEzxVXIxziJERHzEiAPXwSMVAf+i3u95/qWfIqkbME24bL6lQVnBrJBOXXQZcxcdf8RPcnLGgAAaAQP3x3pZsh4zxka3MIBGaZkEA5ibGI8E6ZTTMSXZk8ucnS9iWHbvV9QS2d7debd3hp3hWUaNl6RlBdFgNOJIgD97gVUpe5WGL0vn/AH9AZ2LcBrYcb2VdElzpJudSdAN/cAPJCYvGPEfhNAO8h4Bi9u10VeGx5eTTLWtziGlubWQQ0yTYxHeEPKPaRpUJvUpWvlsurVBUcTMNaLWk5QeHEkyepVUDLmB0IBERrMR4Klji0zGm4+BB9EUQJLQOyGlwm5ktDpJjoO5Rqh0JJlGOGdgcPiYIPNm4/wBJMdCOC7Zu1G0tKZLiIJzkTedALaKzB2l5+FouPmzAgM77zyBQ7HU/+yzxqf60mUN6NuLN8Ks6vV99XaWiC+QZMjiTO4ADuhPsNSzkMbADRabWG/qSZSfDvaajWhjWF0gEF3DTtE2OnemFAAgkmIi289AqjGrCnkugsU+zM3mI3qnEYeRmGot/TP0PryTCriDkYYy2lps420HKbXQ7KmrjuknmTu7/ALquwk+LpFFMBo5qdFpcYXjSPlH933RmDeARYDnf6lU7GJoPazK0AL0LwlRc9LHkK70urVUVWKEqssrIYv252hRLGNe01H5iGU2zL8zHNcCQRAAJMzuRuwvas0/dsxVE0QcrG1c7alPNAyh5F2TxIjms97RvFDGfxDxLGRmEXyOaWEt/lJJjn1UcfimFj3F7H0SC5rwRAEQGls2Iv5cFmnmakNULR9Gzfiu/e6EU42Wa9lKrnYei58yWM+L4oAtm5xErRDRaRRWUn9pcLnpZhqwz3Gx+h7k4UKtMOBadCCD3q4y4tMDLj9SDj8zAVMOhnsTWoyJadQSD1FkDVYuomeZkqKHUN6hBRTVaGBFZVBDWhSNN1uC9oMkwnDaEASOqU5UMUOR7s7DCzimoYNUFRcIRRdZIlbZrgkkePpCV4KV9QqDUMyuzpyTo5+RxbbBtqQXhh0b5k3lF0aAaJaTeDYa5QdTuEkCUu24wlmdvxM15t/T0J4Kmj7Sw3L7oERBkyCOGmiTJNaNEFaTT0H16LAYBAItER5pzh4cA4kAnWd5FiR++Ky38ea9QdnJqXEGbC5P73lOMLWkk6AQALnjA8ArSdCprdPZpsNRbxCH2gwCBuF44oKhWnR3keipxOILmn5myerd/hr0nglcHdmn1I8OKWyVSi12a9jAPzFzjImbTawH3Q+2dnUabWQcrjqJJ756oCrj2wM0nKD2Ro4kkyTMjWDY6btyHaG2KhceySZ1MxyjgEag7BeRcd9v9DZOoNewPzAFwvNpIsXDr6yoNw5yxnZpGt4GgmJjTwQJxRcBbKIEN4CLBd79NWN1sz+urdE8YA2KY0HaJ3OLgDI5RAHQ8UEYSvarMW6pNNwyNabE6AQSIiT+YqVN9SBmImBOUeNz+iFxo1Qny37BZdL+g8z+wmzq7SGuc5rS6ZzGJIsXDr6gpNhacnWBq48ALk+CqNcVKgJlrTDRvytFm9eJ43SpujbhjyW+jR0qrDb3jfE/ZXYh4ENBkRmnjI9It4pLWwgY0uzTuECxM8Z4Sr9n1szS06iS3p+YfXxS1K3s0PGktDKm5XNehGFX0xJARMGI0w9WWyvXFQYYC8c5JNi6OcVS9x0AXrnarhUhQgm277MU8SyHEtdxGv7/fBZPDewFCg4PqRVIMtBFid0jevoFWqTvSCpULsQ8HSm1sfzOknyyquKbstP2L8M6HAcNepuU6pmySYQXnmnGHREOcuC9eogoSGV9oaWSsTueA7v0PpPeljiCtJ7VYfNTa/e036Ot65VlyV0sD5QR53zYcMz+T3+ZIrpVDnqQcnUZbGWDxBBsnAr5kmpi4hHgwEmSHxbQWXBtwiaXabPglTe0YTehYAJctDYfFa9ikrla+lJXChzTVOJkngnekDYmtkaT3AcSR6QlQqf4Wf/XT/wBKu2o458p0At37/wB8EKCrpPYO4KkG4WqDLSGjNaQ1rYMyJLQLT+7I7Z9XLYnKZBmJggOHjfxCTtWowuyHVmNqSGkiDI+KLB3eI9d6DJxit9BYITySuO2jyrUaIIrF8EdnKRoRxKD9/kBq8LNHFxBjuAknuG9M/wD284f9RvgUq2xhiHin+VotzzXc7vNu4cEuMovSZonhyxfOcaS/f82BNfiHiWUw4aSKFMjxyKGExbw806oDQ7snsMYWmQWk5WgxIEzxnctTi8Az/lU2MhjS7tOcLu3CHD5bnclftDs9payqGw5/xXJ3D7IYzTZonhcYu3fz/ZgxaRINiNVEpngNnPq02vcYMQZvmAsHeHpO9TdsR3zjwKf60PdmD/CzfVVr8BU12UGp8tm83HQdBcnpzQfvqkTlbHEUaceOVE7XpljwwizQCODpuXd5Ef0pts+uKxLoyhsAtHEjcReBltp8RS8kvrUbfHx/87p/z7/kIWVc4NN2UB4iQ1rYMgtJLQLSBPJB4Jrm1QIhwdEG0EG8p/trAsa1tRoyyYI6gmY3GyqbsR1dramYNJEGQTmy2DvC3dO9JlTVo24uSlwZHGVOw7KSdJknTMIjsiTMKOxcOXvzbmwT1mwVzfZl3/cb/lKb4bCikxrBe4k8TqT5eSVZrSd7CfdN+UeAVLiJsAOgV9UoOboRiSCM1lFz14q3uVFnOcuqFVzorHqFMoJSyjB944fmef7YZ/8AlMqpgE8BKWYMfhjv8yjitWC2roIwjUyw5S/Db0fh1Ggiyoq2iVZVCuZTsgLBMXh87HM+YEeOhXz16+nEL5pjI94/+d3/AJFbPEfaOT9KRXwy+8oK6V6GqQYtpxw2m4q0VSq6TFEpQ4abIEulOQluy2w3mUwlIn2asWokwvQoBSBQhge18NmbmGrfMb/ukYWpBUwUyM6RnyYVN2Z7Z9MF4zfDqeMLXN20wWAgaDklONwlWofwwDYWkA6c+ils/YFVx/FOVvAEFx+gWLNknOW1VHa8LxsOHHcXbfv/AANaeJzGxlE1sGHgGLj03pKdmOo1PnadCTHUQnmDqui4HchT4vQ/Lj9WDTC20g7UBQxOFFSGmIHDgpNxXEgKbMW0zBFtVObT0I/xrVP8ftPX0gBAEIRxV9auANUv9/LoVQluh8oUrBvaDBZ6eYDtNuOY3j6rLYPFPpmWd4IkHqFuKzlQCtEMlRpoxZfG5z5xdMzlJ9TE1GtcbC5gQAN567lqWNAECwFgOQXjVJBKVj8WLhdu2/ciqa2rev0KuVGIPaaP5j4R90KHHlcoWkrcU5V0VQRah6hV5Q51UIeqYeoFcqIB7XrhtJx4wPE/aULhjLAg9v15a1vFxPgI+qKwQPu2n/CPRaYxqCMkZXnkvkl/f1DKesI+k5A4WmTp4/ZEmnGpgcrnwAQNGkOptBMohJnYao+DTrFo4Fgv4oqjhnfmfKW0WXYt8Dlv7l8vDy4k8ST43X0zEtzNLJ1BE8JEL54cK6m8seLjX7jktXiV8RyvpRN8PlslSYiG0wFU10KRetdnJcRrUw8NQlKgU0qCy8o0YSFI0uNsnhWQiQVAL0FAxy1onK9lQleyqLLAVIFVAqQKhQx2abk8o8T+iZ03XSrAvAb3k+QhEUMUJMLNPtnV8eNY0W7VqNy33X6LNbS9oCw9nTf+icVjM71k9o7DzuJbUhvy5Z+t0twtmmMqTTKHbae+XyRJtBOgspYTbzml7dZjfeYS/GYZ7XBoBIAtAMeG5EUtjZjnLoJiQBOgjWVEr1Qbdbsc4f2mIbkJ7QIjnIBnzPgmOD2mQ4lwjNG6YibkJXRpU6TZAkneblRo1pMnqSjhjS2xeTI2qRqH4kO0MqVJyz+z8SXOPPROqDkTF0GtK5zlAFWMQhHoaQhMQ78Ro4NJ8SPsjCUsxFT8Z3JjR5k/VUgkiGLqXhWMSsVs1Q8kS6vAS5ZIx7Y5YpS6DSVUxC08c08lPB1sxIAmCUcGpbQucXHsIehxiRMIk4V7juaPEq6hsym28SeJuf0R6XYFmY/9JqVqk/CwEjMd9zOUb/RaJmzmNaGjQWCPAUXK5ZG9CoYYxk5e7KGYVovE+auDVIFeOqCY0KGxp4DCGxWGzHMLO5b+qLCjChAJjCl+39n56ZeBD2AkHiBcg/T9U6eEt9ocaKdB3zPBY0cZs49wnyRY2+SoV5Ci8UuXVGGc5eZl41ygXLpnmrNivQoBSWY2El6CoyvZVFkl7KhK6VCyYK9BUJXSoQKoVNRy9FPC1hmhBgqLZBlJyQfaN/i5opcZDGrUgpbiHXVletvS7FYkAT/ueQSlo299Eq9cNF78BxVVFx1J8kMxuY5na7hw5BWOE66KWXxIVHl55L1x/IP6voFWasnIzXedzRz58kRTowFdk4heDEQnuG0STDBPMMLBVZTQS1WhVNViohRjMYyk3M8wJhJKOMbUc+oCYcRA0s0BvqCm20sI2rTLHCQfXcQdxWCxWKyZGMs6zGNnuv5klZfInOL10bvGhjkt9mhxmNZTaSSAB3BV4AuqDO+QDpNiRxg6ITCbPaIqVTneNJ+FvMDeeZXYvFOe7I2/GNAOLisLvtmzXSCsdjqQsCJ5K3Zu0cp7JkbwdChaWHpsEvIlCsfwRxk0wJxi0b6jUa9ocNCprL+zO0YeaTj8Xab/ADD4h3gT3c1qF0oT5Rs5mSHCVFblAqVQqt1Vo1KMWeqFVgIgqp2MG4Eqt2KduACouj1ldzDDrjii2Yhp3oHNOqpc0i40V2Si3am0AwTqfyjj15LG41z6ji55k+QHADcEftivNUxuAHlP1QS24IKMb92cTzMznNx9kL6lC0oYlOgwIOvh72WlSOfKJpl6uXLMbD1egrlyos6V7K8XKEPV0rlyhD2V0rlyhZ0rqWzm1XARHEjcFy5Bk/1Y7x2/UVMFxezHMNrjiPshf4Co7lzP2XLlmTOwE0MC2mIHUk6k8Spe7XLlCF9BqcYfQLlyhQS1SK5coURdYE8L+Cwu2dkdttRouPtB714uUpNUw4SaegPDmpVJa5+Vo1j4zyHDqi34tlIBjBHACS4n1JXLlyskVGTSOtB8ops6hReZfWbkG4EgmOJjTovK2IZ+VerkK7L7jYnO1Pd12vmMrmn+4L6TWxLuMLly6GBVE5/kvaB2PkkzwHhf6r1cuT2ZySg5y5cqZEC1scxurhPCZPgELiNuWhje930C5ctePBGk2cjyPNycnGOqEzyZJNybk9V4XQuXLQjAyQepEArlyjIj/9k=",
//       technologies: ["Angular", "Spring Boot", "MySQL", "WebRTC"],
//       category: "web",
//       featured: false,
//       links: {
//         view: "effulgent-pithivier-cbc3f0.netlify.app/",
//         demo: "effulgent-pithivier-cbc3f0.netlify.app/",
//         github: "https://github.com/isinghranjeet/Patient-Management-System"
//       }
//     },
//     {
//       id: 9,
//       title: "Real Estate Listing Platform",
//       description: "Modern property listing platform with advanced search filters, virtual tours, and agent connection features.",
//       image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
//       technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
//       category: "design",
//       featured: true,
//       links: {
//         view: "#",
//         demo: "#",
//         github: "#"
//       }
//     },
//     {
//       id: 10,
//       title: "AI-Powered Chatbot",
//       description: "Intelligent chatbot system with natural language processing for customer support and engagement.",
//       image: "https://images.unsplash.com/photo-1579762715459-5a068c289fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
//       technologies: ["Python", "TensorFlow", "React", "WebSocket"],
//       category: "web",
//       featured: true,
//       links: {
//         view: "#",
//         demo: "#",
//         github: "#"
//       }
//     }
//   ];

//   const filteredProjects = useMemo(() => {
//     let filtered = activeFilter === 'all' 
//       ? projects 
//       : projects.filter(project => project.category === activeFilter);

//     if (searchTerm) {
//       filtered = filtered.filter(project =>
//         project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         project.technologies.some(tech => 
//           tech.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     }

//     return filtered;
//   }, [activeFilter, searchTerm]);

//   const projectStats = useMemo(() => ({
//     total: projects.length,
//     web: projects.filter(p => p.category === 'web').length,
//     mobile: projects.filter(p => p.category === 'mobile').length,
//     design: projects.filter(p => p.category === 'design').length,
//     featured: projects.filter(p => p.featured).length
//   }), []);

//   // Function to check if link is valid (not empty or just "#")
//   const isValidLink = (link) => {
//     return link && link !== "#" && link.trim() !== "";
//   };

//   // Function to handle link clicks
//   const handleLinkClick = (link, event) => {
//     if (!isValidLink(link)) {
//       event.preventDefault();
//       // You can add a toast notification here if needed
//       console.log("No link available for this project");
//     }
//   };

//   return (
//     <section id="projects" className="section projects">
//       <div className="container">
//         <h2 className="section-title" data-aos="fade-up">My <span>Projects</span></h2>
        
//         {/* Simple Search Bar */}
//         <div className="projects-search" data-aos="fade-up">
//           <div className="search-box">
//             <i className="fas fa-search"></i>
//             <input
//               type="text"
//               placeholder="Search projects..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="search-input"
//             />
//             {searchTerm && (
//               <button 
//                 className="clear-search"
//                 onClick={() => setSearchTerm('')}
//               >
//                 <i className="fas fa-times"></i>
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Filter Buttons - Enhanced with counts */}
//         <div className="projects-filter" data-aos="fade-up">
//           <button 
//             className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
//             onClick={() => setActiveFilter('all')}
//           >
//             All <span className="filter-count">({projectStats.total})</span>
//           </button>
//           <button 
//             className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
//             onClick={() => setActiveFilter('web')}
//           >
//             Web Apps <span className="filter-count">({projectStats.web})</span>
//           </button>
//           <button 
//             className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} 
//             onClick={() => setActiveFilter('mobile')}
//           >
//             Mobile <span className="filter-count">({projectStats.mobile})</span>
//           </button>
//           <button 
//             className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`} 
//             onClick={() => setActiveFilter('design')}
//           >
//             UI/UX <span className="filter-count">({projectStats.design})</span>
//           </button>
//         </div>

//         {/* Results Info */}
//         {searchTerm && (
//           <div className="results-info" data-aos="fade-up">
//             <p>
//               Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
//               {searchTerm && ` for "${searchTerm}"`}
//             </p>
//           </div>
//         )}

//         {/* Projects Grid - Enhanced with tech icons */}
//         <div className="projects-grid">
//           {filteredProjects.map((project, index) => (
//             <div 
//               key={project.id} 
//               className={`project-card ${project.featured ? 'featured' : ''}`}
//               data-category={project.category}
//               data-aos="fade-up" 
//               data-aos-delay={index * 100}
//             >
//               {project.featured && (
//                 <div className="featured-badge">
//                   <i className="fas fa-star"></i> Featured
//                 </div>
//               )}
              
//               <div className="project-img">
//                 <img src={project.image} alt={project.title} />
//                 <div className="project-overlay">
//                   <div className="project-links">
//                     <a 
//                       href={isValidLink(project.links.view) ? project.links.view : "#"} 
//                       onClick={(e) => handleLinkClick(project.links.view, e)}
//                       className={!isValidLink(project.links.view) ? "disabled-link" : ""}
//                       title={isValidLink(project.links.view) ? "View Details" : "No link available"}
//                     >
//                       <i className="fas fa-eye"></i>
//                     </a>
//                     <a 
//                       href={isValidLink(project.links.demo) ? project.links.demo : "#"} 
//                       onClick={(e) => handleLinkClick(project.links.demo, e)}
//                       className={!isValidLink(project.links.demo) ? "disabled-link" : ""}
//                       title={isValidLink(project.links.demo) ? "Live Demo" : "No demo available"}
//                     >
//                       <i className="fas fa-external-link-alt"></i>
//                     </a>
//                     {project.links.github && (
//                       <a 
//                         href={isValidLink(project.links.github) ? project.links.github : "#"} 
//                         onClick={(e) => handleLinkClick(project.links.github, e)}
//                         className={!isValidLink(project.links.github) ? "disabled-link" : ""}
//                         title={isValidLink(project.links.github) ? "Source Code" : "Code not available"}
//                       >
//                         <i className="fab fa-github"></i>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="project-info">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
                
//                 {/* Enhanced Tech Stack with Icons */}
//                 <div className="project-tech">
//                   {project.technologies.map((tech, i) => (
//                     <span key={i} className="tech-tag" title={tech}>
//                       <i className={techIcons[tech] || 'fas fa-code'}></i>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="project-actions">
//                   <a 
//                     href={isValidLink(project.links.demo) ? project.links.demo : "#"} 
//                     onClick={(e) => handleLinkClick(project.links.demo, e)}
//                     className={`btn ${!isValidLink(project.links.demo) ? "btn-disabled" : ""}`}
//                   >
//                     <i className="fas fa-external-link-alt"></i>
//                     {isValidLink(project.links.demo) ? "View Project" : "Coming Soon"}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* No Results Message */}
//         {filteredProjects.length === 0 && (
//           <div className="no-projects" data-aos="fade-up">
//             <i className="fas fa-search"></i>
//             <h3>No projects found</h3>
//             <p>Try adjusting your search or filter criteria</p>
//             <button 
//               className="btn"
//               onClick={() => {
//                 setSearchTerm('');
//                 setActiveFilter('all');
//               }}
//             >
//               Clear Filters
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Project Modal */}
//       {selectedProject && (
//         <div className="project-modal">
//           <div className="modal-overlay" onClick={() => setSelectedProject(null)}></div>
//           <div className="modal-content" data-aos="zoom-in">
//             <button className="modal-close" onClick={() => setSelectedProject(null)}>
//               <i className="fas fa-times"></i>
//             </button>
            
//             <div className="modal-body">
//               <div className="modal-image">
//                 <img src={selectedProject.image} alt={selectedProject.title} />
//               </div>
              
//               <div className="modal-info">
//                 <h2>{selectedProject.title}</h2>
//                 <p>{selectedProject.description}</p>
                
//                 <div className="modal-tech">
//                   <h4>Technologies Used:</h4>
//                   <div className="tech-list">
//                     {selectedProject.technologies.map((tech, index) => (
//                       <span key={index} className="tech-tag">
//                         <i className={techIcons[tech] || 'fas fa-code'}></i>
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="modal-actions">
//                   <a 
//                     href={isValidLink(selectedProject.links.demo) ? selectedProject.links.demo : "#"} 
//                     onClick={(e) => handleLinkClick(selectedProject.links.demo, e)}
//                     className={`btn ${!isValidLink(selectedProject.links.demo) ? "btn-disabled" : ""}`}
//                   >
//                     <i className="fas fa-external-link-alt"></i>
//                     {isValidLink(selectedProject.links.demo) ? "Live Demo" : "Demo Coming Soon"}
//                   </a>
//                   <a 
//                     href={isValidLink(selectedProject.links.view) ? selectedProject.links.view : "#"} 
//                     onClick={(e) => handleLinkClick(selectedProject.links.view, e)}
//                     className={`btn btn-outline ${!isValidLink(selectedProject.links.view) ? "btn-disabled" : ""}`}
//                   >
//                     <i className="fas fa-eye"></i>
//                     {isValidLink(selectedProject.links.view) ? "View Details" : "Details Unavailable"}
//                   </a>
//                   {selectedProject.links.github && (
//                     <a 
//                       href={isValidLink(selectedProject.links.github) ? selectedProject.links.github : "#"} 
//                       onClick={(e) => handleLinkClick(selectedProject.links.github, e)}
//                       className={`btn btn-outline ${!isValidLink(selectedProject.links.github) ? "btn-disabled" : ""}`}
//                     >
//                       <i className="fab fa-github"></i>
//                       {isValidLink(selectedProject.links.github) ? "Source Code" : "Code Private"}
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .disabled-link {
//           opacity: 0.5;
//           cursor: not-allowed;
//           pointer-events: none;
//         }
        
//         .btn-disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//           background-color: #6c757d;
//           border-color: #6c757d;
//         }
        
//         .btn-disabled:hover {
//           background-color: #6c757d;
//           border-color: #6c757d;
//           transform: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;

import { useState, useMemo, useCallback } from 'react';
import useAOS from '../hooks/useAOS';

const Projects = () => {
  useAOS();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Tech stack icons mapping - keeping it simple and clean
  const techIcons = {
    // Frontend
    'React': 'fab fa-react',
    'Vue.js': 'fab fa-vuejs',
    'Angular': 'fab fa-angular',
    'Next.js': 'fas fa-bolt',
    'React Native': 'fab fa-react',
    
    // Backend
    'Node.js': 'fab fa-node-js',
    'Spring Boot': 'fas fa-leaf',
    'Python': 'fab fa-python',
    
    // Databases
    'MongoDB': 'fas fa-database',
    'Firebase': 'fas fa-fire',
    'MySQL': 'fas fa-database',
    
    // APIs & Services
    'REST API': 'fas fa-cloud',
    'WebSocket': 'fas fa-plug',
    'CoinGecko API': 'fas fa-chart-line',
    'Google Maps API': 'fas fa-map-marker-alt',
    'WebRTC': 'fas fa-video',
    
    // Payment
    'Stripe': 'fab fa-stripe',
    'Payment Gateway': 'fas fa-credit-card',
    
    // UI & Styling
    'CSS3': 'fab fa-css3-alt',
    'Material UI': 'fas fa-palette',
    
    // State Management & Tools
    'Redux': 'fas fa-code-branch',
    'Chart.js': 'fas fa-chart-bar',
    'D3.js': 'fas fa-chart-area',
    
    // Mobile
    'Flutter': 'fas fa-mobile-alt',
    'TensorFlow': 'fas fa-brain'
  };

  const projects = [
    {
      id: 1,
      title: "Examination Management System",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      featured: true,
      links: {
        view: "portfolio-nextjs-o9lx.vercel.app",
        demo: "portfolio-nextjs-o9lx.vercel.app",
        github: "https://github.com/isinghranjeet/portfolio-nextjs"
      }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["Vue.js", "Firebase", "CSS3", "Chart.js"],
      category: "web",
      featured: false,
      links: {
        view: "https://scintillating-pie-157e81.netlify.app/",
        demo: "https://scintillating-pie-157e81.netlify.app/",
        github: "https://github.com/isinghranjeet/Task-Manager"
      }
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      description: "Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      category: "mobile",
      featured: true,
      links: {
        view: "#",
        demo: "https://fitness-demo.vercel.app/",
        github: "https://github.com/example/fitness-tracker"
      }
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media performance with real-time metrics and data visualization.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["React", "D3.js", "REST API", "Material UI"],
      category: "web",
      featured: false,
      links: {
        view: "https://school-taupe-eight.vercel.app/",
        demo: "https://school-taupe-eight.vercel.app/",
        github: "https://github.com/example/social-dashboard"
      }
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      description: "Comprehensive travel booking system with flight, hotel, and car rental search and reservation capabilities.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      featured: true,
      links: {
        view: "#",
        demo: "",
        github: ""
      }
    },
    {
      id: 6,
      title: "Food Delivery App",
      description: "Mobile application for food ordering and delivery with real-time tracking and multiple payment options.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Payment Gateway"],
      category: "mobile",
      featured: false,
      links: {
        view: "https://lively-faloodeh-f07528.netlify.app/",
        demo: "https://lively-faloodeh-f07528.netlify.app/",
        github: "https://github.com/isinghranjeet/Food-Dilivery-App"
      }
    },
    {
      id: 7,
      title: "Crypto Tracker Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and market analysis.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      technologies: ["Vue.js", "WebSocket", "CoinGecko API", "Chart.js"],
      category: "web",
      featured: true,
      links: {
        view: "#",
        demo: "#",
        github: "#"
      }
    },
    {
      id: 8,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Angular", "Spring Boot", "MySQL", "WebRTC"],
      category: "web",
      featured: false,
      links: {
        view: "https://effulgent-pithivier-cbc3f0.netlify.app/",
        demo: "https://effulgent-pithivier-cbc3f0.netlify.app/",
        github: "https://github.com/isinghranjeet/Patient-Management-System"
      }
    },
    {
      id: 9,
      title: "Real Estate Listing Platform",
      description: "Modern property listing platform with advanced search filters, virtual tours, and agent connection features.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      category: "design",
      featured: true,
      links: {
        view: "#",
        demo: "#",
        github: "#"
      }
    },
    {
      id: 10,
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot system with natural language processing for customer support and engagement.",
      image: "https://images.unsplash.com/photo-1579762715459-5a068c289fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      technologies: ["Python", "TensorFlow", "React", "WebSocket"],
      category: "web",
      featured: true,
      links: {
        view: "#",
        demo: "#",
        github: "#"
      }
    }
  ];

  const filteredProjects = useMemo(() => {
    let filtered = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    return filtered;
  }, [activeFilter, searchTerm]);

  const projectStats = useMemo(() => ({
    total: projects.length,
    web: projects.filter(p => p.category === 'web').length,
    mobile: projects.filter(p => p.category === 'mobile').length,
    design: projects.filter(p => p.category === 'design').length,
    featured: projects.filter(p => p.featured).length
  }), []);

  // Function to check if link is valid (not empty or just "#")
  const isValidLink = (link) => {
    return link && link !== "#" && link.trim() !== "";
  };

  // Function to handle link clicks
  const handleLinkClick = (link, event) => {
    if (!isValidLink(link)) {
      event.preventDefault();
      // You can add a toast notification here if needed
      console.log("No link available for this project");
    }
  };

  // Function to handle project card click for modal
  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My <span>Projects</span></h2>
        
        {/* Simple Search Bar */}
        <div className="projects-search" data-aos="fade-up">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons - Enhanced with counts */}
        <div className="projects-filter" data-aos="fade-up">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('all')}
          >
            All <span className="filter-count">({projectStats.total})</span>
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('web')}
          >
            Web Apps <span className="filter-count">({projectStats.web})</span>
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile <span className="filter-count">({projectStats.mobile})</span>
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('design')}
          >
            UI/UX <span className="filter-count">({projectStats.design})</span>
          </button>
        </div>

        {/* Results Info */}
        {searchTerm && (
          <div className="results-info" data-aos="fade-up">
            <p>
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* Projects Grid - Enhanced with tech icons */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              data-category={project.category}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              onClick={() => handleProjectClick(project)}
            >
              {project.featured && (
                <div className="featured-badge">
                  <i className="fas fa-star"></i> Featured
                </div>
              )}
              
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <button 
                      className="project-link-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                      title="View Details"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <a 
                      href={isValidLink(project.links.demo) ? project.links.demo : "#"} 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick(project.links.demo, e);
                      }}
                      className={!isValidLink(project.links.demo) ? "disabled-link" : ""}
                      title={isValidLink(project.links.demo) ? "Live Demo" : "No demo available"}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    {project.links.github && (
                      <a 
                        href={isValidLink(project.links.github) ? project.links.github : "#"} 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLinkClick(project.links.github, e);
                        }}
                        className={!isValidLink(project.links.github) ? "disabled-link" : ""}
                        title={isValidLink(project.links.github) ? "Source Code" : "Code not available"}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* Enhanced Tech Stack with Icons */}
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag" title={tech}>
                      <i className={techIcons[tech] || 'fas fa-code'}></i>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button 
                    className={`btn ${!isValidLink(project.links.demo) ? "btn-disabled" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isValidLink(project.links.demo)) {
                        window.open(project.links.demo, '_blank');
                      }
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    {isValidLink(project.links.demo) ? "View Project" : "Coming Soon"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="no-projects" data-aos="fade-up">
            <i className="fas fa-search"></i>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              className="btn"
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal active">
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}></div>
          <div className="modal-content" data-aos="zoom-in">
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                
                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        <i className={techIcons[tech] || 'fas fa-code'}></i>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <button 
                    onClick={() => {
                      if (isValidLink(selectedProject.links.demo)) {
                        window.open(selectedProject.links.demo, '_blank');
                      }
                    }}
                    className={`btn ${!isValidLink(selectedProject.links.demo) ? "btn-disabled" : ""}`}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    {isValidLink(selectedProject.links.demo) ? "Live Demo" : "Demo Coming Soon"}
                  </button>
                 
                  {selectedProject.links.github && (
                    <button 
                      onClick={() => {
                        if (isValidLink(selectedProject.links.github)) {
                          window.open(selectedProject.links.github, '_blank');
                        }
                      }}
                      className={`btn btn-outline ${!isValidLink(selectedProject.links.github) ? "btn-disabled" : ""}`}
                    >
                      <i className="fab fa-github"></i>
                      {isValidLink(selectedProject.links.github) ? "Source Code" : "Code Private"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
     <style jsx>{`
       .disabled-link {
          opacity: 0.5;
         cursor: not-allowed;
         pointer-events: none;
        }
        
        .btn-disabled {
          opacity: 0.6;
           cursor: not-allowed;
           background-color: #6c757d;
           border-color: #6c757d;
         }
        
         .btn-disabled:hover {
          background-color: #6c757d;
           border-color: #6c757d;
           transform: none;
        }




        












      `}</style>
    </section>
   );
 };

 export default Projects;