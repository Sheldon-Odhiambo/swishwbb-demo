export const PLAYERS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    position: 'Point Guard',
    number: 4,
    bio: 'Sarah is the floor general of Swish Women Basketball. With incredible court vision and lightning-fast speed, she dictates the pace of the game.',
    stats: { ppg: 18.5, apg: 8.2, rpg: 4.1 },
    image: 'https://picsum.photos/seed/player1/600/800?blur=1',
    highlights: ['MVP 2024', 'All-Star Selection', 'Record for most assists in a single game']
  },
  {
    id: '2',
    name: 'Maya Rodriguez',
    position: 'Shooting Guard',
    number: 11,
    bio: 'A lethal three-point shooter, Maya can change the momentum of a game in seconds. Her defensive intensity is unmatched.',
    stats: { ppg: 22.1, apg: 3.4, rpg: 5.0 },
    image: 'https://picsum.photos/seed/player2/600/800?blur=1',
    highlights: ['Scoring Champion 2025', '3-Point Contest Winner']
  },
  {
    id: '3',
    name: 'Elena Rostova',
    position: 'Small Forward',
    number: 23,
    bio: 'Elena is a versatile wing player who can score from anywhere on the court. Her athleticism makes her a nightmare matchup.',
    stats: { ppg: 16.8, apg: 4.5, rpg: 7.2 },
    image: 'https://picsum.photos/seed/player3/600/800?blur=1',
    highlights: ['Defensive Player of the Year', 'Team Captain']
  },
  {
    id: '4',
    name: 'Chloe Bennett',
    position: 'Power Forward',
    number: 34,
    bio: 'Chloe dominates the paint with her strength and footwork. She is the anchor of the Swish defense.',
    stats: { ppg: 14.2, apg: 2.1, rpg: 11.5 },
    image: 'https://picsum.photos/seed/player4/600/800?blur=1',
    highlights: ['Rebounding Leader', 'All-Defensive First Team']
  },
  {
    id: '5',
    name: 'Aisha Okafor',
    position: 'Center',
    number: 50,
    bio: 'Aisha is an unstoppable force inside. Her shot-blocking ability and finishing around the rim make her a franchise cornerstone.',
    stats: { ppg: 19.4, apg: 1.8, rpg: 12.8 },
    image: 'https://picsum.photos/seed/player5/600/800?blur=1',
    highlights: ['Rookie of the Year 2023', 'Finals MVP']
  }
];

export const GAMES = [
  {
    id: '1',
    date: 'Oct 15, 2026',
    opponent: 'Metro City Vipers',
    venue: 'Swish Arena',
    time: '19:00',
    image: 'https://picsum.photos/seed/venue1/800/400?blur=2',
    status: 'upcoming'
  },
  {
    id: '2',
    date: 'Oct 22, 2026',
    opponent: 'Coastal Waves',
    venue: 'Oceanfront Pavilion',
    time: '18:30',
    image: 'https://picsum.photos/seed/venue2/800/400?blur=2',
    status: 'upcoming'
  },
  {
    id: '3',
    date: 'Oct 29, 2026',
    opponent: 'Northern Lights',
    venue: 'Swish Arena',
    time: '20:00',
    image: 'https://picsum.photos/seed/venue3/800/400?blur=2',
    status: 'upcoming'
  },
  {
    id: '4',
    date: 'Oct 05, 2026',
    opponent: 'Desert Sun',
    venue: 'Swish Arena',
    time: '19:00',
    image: 'https://picsum.photos/seed/venue4/800/400?blur=2',
    status: 'completed',
    score: '88 - 76',
    result: 'W',
    summary: 'Swish dominated the second half behind Maya Rodriguez\'s 30-point performance.'
  },
  {
    id: '5',
    date: 'Sep 28, 2026',
    opponent: 'Mountain Peaks',
    venue: 'Altitude Center',
    time: '17:00',
    image: 'https://picsum.photos/seed/venue5/800/400?blur=2',
    status: 'completed',
    score: '72 - 75',
    result: 'L',
    summary: 'A hard-fought battle ended in a narrow defeat on the road.'
  }
];

export const MERCH = [
  {
    id: '1',
    name: 'Swish Official Home Jersey',
    price: 85.00,
    image: 'https://picsum.photos/seed/merch1/600/600',
    description: 'The official home jersey of the Swish Women Basketball team. Features premium moisture-wicking fabric and stitched team logos.',
    category: 'Jerseys'
  },
  {
    id: '2',
    name: 'Swish Madness Hoodie',
    price: 65.00,
    image: 'https://picsum.photos/seed/merch2/600/600',
    description: 'Stay warm and rep the team with this comfortable, heavyweight fleece hoodie featuring the Swish Madness logo.',
    category: 'Apparel'
  },
  {
    id: '3',
    name: 'Swish Snapback Cap',
    price: 30.00,
    image: 'https://picsum.photos/seed/merch3/600/600',
    description: 'Classic snapback cap with embroidered Swish logo. Adjustable fit.',
    category: 'Accessories'
  },
  {
    id: '4',
    name: 'Swish Away Jersey',
    price: 85.00,
    image: 'https://picsum.photos/seed/merch4/600/600',
    description: 'The official away jersey. Noir black with cherry red accents.',
    category: 'Jerseys'
  },
  {
    id: '5',
    name: 'Swish Warmup T-Shirt',
    price: 35.00,
    image: 'https://picsum.photos/seed/merch5/600/600',
    description: 'Lightweight performance tee worn by players during pre-game warmups.',
    category: 'Apparel'
  },
  {
    id: '6',
    name: 'Swish Basketball',
    price: 45.00,
    image: 'https://picsum.photos/seed/merch6/600/600',
    description: 'Official size and weight basketball featuring the Swish team colors and logo.',
    category: 'Equipment'
  }
];

export const NEWS = [
  {
    id: '1',
    title: 'Swish Secure Playoff Spot with Thrilling Victory',
    date: 'Oct 06, 2026',
    excerpt: 'The team rallied in the fourth quarter to defeat the Desert Sun and clinch a postseason berth.'
  },
  {
    id: '2',
    title: 'Maya Rodriguez Named Player of the Month',
    date: 'Oct 01, 2026',
    excerpt: 'After averaging 25 points and 6 rebounds, Maya takes home the league\'s top monthly honor.'
  },
  {
    id: '3',
    title: 'New Swish Madness Merch Drop',
    date: 'Sep 25, 2026',
    excerpt: 'Check out the latest hoodies and accessories now available in the team store.'
  }
];
