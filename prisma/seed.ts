import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.destinations.createMany({
    data: [
      {
        name: 'Moon',
        description:
          'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days',
        imgPng: '/destination/image-moon.png',
        imgWebp: '/destination/image-moon.webp'
      },
      {
        name: 'Mars',
        description:
          'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months',
        imgPng: '/destination/image-mars.png',
        imgWebp: '/destination/image-mars.webp'
      },
      {
        name: 'Titan',
        description:
          'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years',
        imgPng: '/destination/image-titan.png',
        imgWebp: '/destination/image-titan.webp'
      }
    ]
  })
  await prisma.crew.createMany({
    data: [
      {
        name: 'Douglas Hurley',
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        role: 'Commander',
        imgPng: '/crew/image-douglas-hurley.png',
        imgWebp: '/crew/image-douglas-hurley.webp'
      },
      {
        name: 'Mark Shuttleworth',
        bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        role: 'Mission Specialist',
        imgPng: '/crew/image-mark-shuttleworth.png',
        imgWebp: '/crew/image-mark-shuttleworth.webp'
      },
      {
        name: 'Victor Glover',
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        role: 'Pilot',
        imgPng: '/crew/image-victor-glover.png',
        imgWebp: '/crew/image-victor-glover.webp'
      },
      {
        name: 'Anousheh Ansari',
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        role: 'Flight Engineer',
        imgPng: '/crew/image-anousheh-ansari.png',
        imgWebp: '/crew/image-anousheh-ansari.webp'
      }
    ]
  })
  await prisma.technology.createMany({
    data: [
      {
        name: 'Launch vehicle',
        description:
          'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!',
        imgPortrait: '/technology/image-launch-vehicle-portrait.jpg',
        imgLandscape: '/technology/image-launch-vehicle-landscape.jpg'
      },
      {
        name: 'Spaceport',
        description:
          'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        imgPortrait: '/technology/image-spaceport-portrait.jpg',
        imgLandscape: '/technology/image-spaceport-landscape.jpg'
      },
      {
        name: 'Space capsule',
        description:
          'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        imgPortrait: '/technology/image-space-capsule-portrait.jpg',
        imgLandscape: '/technology/image-space-capsule-landscape.jpg'
      }
    ]
  })
}

main()
