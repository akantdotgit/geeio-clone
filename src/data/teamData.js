import member1Img from '../assets/images/6a66eece15b2ae0c7147965a_team-member-1.webp';
import member2Img from '../assets/images/6a66eece4710f389c75b4a9b_team-member-2.webp';
import member3Img from '../assets/images/6a66eece2b116c94cb25a716_team-member-3.webp';
import member4Img from '../assets/images/6a66eeced8c3884256043d39_team-member-4.webp';
import member5Img from '../assets/images/6a619d997ef351a3e043c007_Team Member 5.webp';
import member6Img from '../assets/images/6a619d997ef351a3e043bffa_Team Member 6.webp';

/**
 * src/data/teamData.js
 * Leadership, botanical experts, and company metrics for the About page
 */

export const ABOUT_METRICS = [
  {
    id: 'species',
    value: '15K+',
    label: 'Plant species',
  },
  {
    id: 'accuracy',
    value: '98%',
    label: 'AI detection accuracy',
  },
  {
    id: 'identified',
    value: '2M+',
    label: 'Plants identified',
  },
];

export const TEAM_MEMBERS = [
  {
    id: 'michael-carter',
    name: 'Michael Carter',
    role: 'Founder & President',
    image: member1Img,
    imageKey: 'team-member-1',
  },
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Founder & Managing Director',
    image: member2Img,
    imageKey: 'team-member-2',
  },
  {
    id: 'martin-bennett',
    name: 'Martin Bennett',
    role: 'Founder & CEO',
    image: member3Img,
    imageKey: 'team-member-3',
  },
  {
    id: 'james-anderson',
    name: 'James Anderson',
    role: 'Chief Growth Officer',
    image: member4Img,
    imageKey: 'team-member-4',
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Head of Botany & Plant Science',
    image: member5Img,
    imageKey: 'team-member-5',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Lead AI Engineer',
    image: member6Img,
    imageKey: 'team-member-6',
  },
];

export default TEAM_MEMBERS;
