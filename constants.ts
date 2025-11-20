
import { BootLog, ExperienceItem, ProjectItem, SkillModule } from './types';
import { 
  Award, Shield, Terminal, Zap, BookOpen, Bug, 
  Globe, Database, Server, Code, ShieldAlert, Cloud, 
  Lock, Search, Activity, Network, Wifi, Key, 
  FileCode, Layers, Command, Hash, Siren, Skull, Users 
} from 'lucide-react';
import SplunkLogo from './components/SplunkLogo';

export const BOOT_SEQUENCE: BootLog[] = [
  { id: 1, text: 'Initializing ARPIT-OS v2.6.5 (Cybersecurity Edition)...', delay: 200, type: 'system' },
  { id: 2, text: 'Loading kernel: Cybersecurity_Engineer...', delay: 600, type: 'info' },
  { id: 3, text: 'Mounting file system: /home/arpit...', delay: 1000, type: 'info' },
  { id: 4, text: 'Verifying integrity of core modules...', delay: 1400, type: 'warning' },
  { id: 5, text: 'Warning: Coffee levels critical. Continuing anyway.', delay: 1800, type: 'warning' },
  { id: 6, text: 'Starting daemon: curiosity_service... [OK]', delay: 2200, type: 'success' },
  { id: 7, text: 'Starting service: Threat_Detection_Platform.service', delay: 2600, type: 'info' },
  { id: 8, text: 'Starting service: Asset_Discovery_Pipeline.service', delay: 2900, type: 'info' },
  { id: 9, text: 'Loading module: CEH.cert... [LOADED]', delay: 3300, type: 'success' },
  { id: 10, text: 'Loading module: PQC_Research.paper (IEEE)... [LOADED]', delay: 3600, type: 'success' },
  { id: 11, text: 'Note: Perfectionism level high. Optimizing UI...', delay: 4000, type: 'system' },
  { id: 12, text: 'Connecting to global threat feed... [CONNECTED]', delay: 4400, type: 'success' },
  { id: 13, text: 'System Ready.', delay: 4700, type: 'success' },
  { id: 14, text: 'User: arpitsivakumar@cyber-lab logged in.', delay: 4800, type: 'info' },
];

export const LANGUAGES = [
  { name: 'Tamil', level: 'Native / Mother Tongue', percent: 100 },
  { name: 'English', level: 'Professional Working', percent: 95 },
  { name: 'Hindi', level: 'Full Professional', percent: 90 },
  { name: 'Gujarati', level: 'Professional Working', percent: 85 },
];

export const SKILLS: SkillModule[] = [
  // Certs
  { name: 'Certified Ethical Hacker (CEH)', category: 'cert', icon: Shield, isTop: true },
  { name: 'CCNA (Expected)', category: 'cert', icon: Network },
  // Tools
  { name: 'Splunk', category: 'tools', description: 'SIEM & log correlation', icon: SplunkLogo, isTop: true },
  { name: 'OpenVAS', category: 'tools', description: 'Vulnerability scanning', icon: ShieldAlert },
  { name: 'Burp Suite', category: 'tools', description: 'Web app security testing', icon: Bug, isTop: true },
  { name: 'Wireshark', category: 'tools', description: 'Packet analysis', icon: Activity },
  { name: 'Nmap', category: 'tools', description: 'Network reconnaissance', icon: Wifi },
  { name: 'Metasploit', category: 'tools', description: 'Exploitation framework', icon: Skull },
  // Core
  { name: 'Python', category: 'core', iconClass: 'devicon-python-plain', isTop: true },
  { name: 'Bash Scripting', category: 'core', iconClass: 'devicon-bash-plain' },
  { name: 'SQL', category: 'core', icon: Database },
  { name: 'C/C++', category: 'core', iconClass: 'devicon-cplusplus-plain' },
  // Infra
  { name: 'Active Directory', category: 'infra', description: 'Identity & Access Management', icon: Users, isTop: true },
  { name: 'Linux (Debian/RHEL)', category: 'infra', iconClass: 'devicon-linux-plain', isTop: true },
  { name: 'NixOS', category: 'infra', description: 'Declarative Systems', iconClass: 'devicon-nixos-plain' },
  { name: 'Docker & K8s', category: 'infra', iconClass: 'devicon-docker-plain' },
  { name: 'Azure', category: 'infra', iconClass: 'devicon-azure-plain' },
  { name: 'TCP/IP & Networking', category: 'infra', icon: Globe, isTop: true },
  // Foundation (Freshers)
  { name: 'Network Security', category: 'foundation', description: 'Deep understanding of TCP/IP stack', icon: Lock, isTop: true },
  { name: 'Incident Response', category: 'foundation', description: 'Preparation, Detection, Analysis, Containment', icon: Siren },
  { name: 'OWASP Top 10', category: 'foundation', description: 'Web app vulnerability mitigation', icon: ShieldAlert },
  { name: 'MITRE ATT&CK', category: 'foundation', description: 'TTPs & Threat Actor behavior', icon: Layers },
  { name: 'IAM Concepts', category: 'foundation', description: 'AuthN vs AuthZ, Least Privilege', icon: Key },
  { name: 'Secure Coding', category: 'foundation', description: 'Input validation, Output encoding', icon: FileCode },
  { name: 'SOC Workflows', category: 'foundation', description: 'L1/L2 Triage & Escalation', icon: Command },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'npcil',
    title: 'Cyber Security Intern',
    organization: 'Nuclear Power Corporation of India Ltd. (NPCIL)',
    location: 'Surat, Gujarat',
    period: 'Sep 2024 – Dec 2024',
    type: 'internship',
    status: 'inactive', // Past role
    description: [
      'Deployed a centralized Splunk SIEM with behavioral correlation rules to detect brute-force and privilege escalation attacks across 65+ Linux systems.',
      'Identified critical BIOS & Service misconfigurations in NPCIL systems during deep-dive auditing.',
      'Hardened BIOS and USB policies on 130 systems, cutting the removable-media attack surface by 67%.',
      'Ran OpenVAS scans on 250+ endpoints to identify vulnerability exposure.',
      'Coordinated cross-functional patching workflows, achieving a 72-hour critical patch remediation SLA.'
    ]
  },
  {
    id: 'owasp_trainer',
    title: 'Security Trainer & Mentor',
    organization: 'OWASP Student Chapter',
    location: 'VIT Bhopal',
    period: '2023 - Present',
    type: 'work',
    status: 'active',
    description: [
      'Led 3+ OWASP training sessions educating 200+ employees/students on secure coding practices.',
      'Mentored 50+ peers on incident response methodologies.',
      'Conducted phishing simulation workshops.'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'threat-detection',
    title: 'Threat Detection Platform (Capstone)',
    tags: ['Splunk', 'Python', 'SIEM', 'NIST', 'Linux'],
    description: 'Centralized SIEM dashboard with custom correlation rules tailored for critical infrastructure.',
    longDescription: {
      problem: 'Existing monitoring solutions produced excessive noise, making it difficult to identify genuine threats in a network of 65+ Linux nodes.',
      approach: 'Implemented a Splunk-based SIEM with NIST-aligned correlation rules. Developed Python scripts for log parsing and alert enrichment using external threat intel feeds.',
      impact: 'Reduced false positives by 43% and achieved 35% better anomaly detection accuracy.',
      futureImprovements: 'Implement machine learning models for behavioral anomaly detection to further reduce reliance on static thresholds.'
    }
  },
  {
    id: 'asset-discovery',
    title: 'Automated Asset Discovery Pipeline',
    tags: ['Python', 'Automation', 'Recon', 'Shodan', 'Nmap'],
    description: 'A CLI tool integrating multiple recon engines to map external attack surfaces automatically.',
    longDescription: {
      problem: 'Manual reconnaissance is time-consuming and prone to missing shadow IT assets.',
      approach: 'Engineered a Python automation framework integrating Subfinder, Shodan, Nmap, and Wappalyzer. Added task queue orchestration for scalability.',
      impact: 'Discovered 100+ previously unknown assets with 98% precision in lab testing.',
      futureImprovements: 'Add web vulnerability scanning integration (Nuclei) to automatically scan discovered assets for low-hanging fruit.'
    }
  }
];

export const ACHIEVEMENTS = [
  {
    id: 3,
    title: 'Certified Ethical Hacker',
    value: 'CEH',
    description: 'Certified by EC-Council. Validated offensive security knowledge.',
    icon: Shield,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/50'
  },
  {
    id: 1,
    title: 'Top 50 @ HackTheBox',
    value: 'Top 50',
    description: 'Global ranking among 10,000+ participants. Demonstrated advanced pentesting skills.',
    icon: Terminal,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/50'
  },
  {
    id: 2,
    title: 'Critical Bug Found',
    value: 'NPCIL',
    description: 'Identified critical BIOS & Service misconfigurations in NPCIL systems during internship.',
    icon: Bug,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/50'
  },
  {
    id: 4,
    title: 'IEEE Research Author',
    value: '1 Paper',
    description: 'Lead author on Post-Quantum Cryptography research. Achieved 57.4% performance gain.',
    icon: BookOpen,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/50'
  }
];
