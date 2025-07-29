export interface TeamMember {
    name: string;
    title: string;
    bio: string[];
}
  
export interface TeamData {
    teamMembers: TeamMember[];
    juniorResearchers: TeamMember[];
}