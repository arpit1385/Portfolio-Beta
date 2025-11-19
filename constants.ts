import { BootLog, ExperienceItem, ProjectItem, SkillModule } from './types';
import { Award, Shield, Terminal, Zap, BookOpen } from 'lucide-react';

export const BOOT_SEQUENCE: BootLog[] = [
  { id: 1, text: 'Initializing ARPIT-OS v2.6.5 (Cybersecurity Edition)...', delay: 500, type: 'info' },
  { id: 2, text: 'Loading kernel: Cybersecurity_Engineer...', delay: 800, type: 'info' },
  { id: 3, text: 'Mounting file system: /home/arpit...', delay: 1100, type: 'info' },
  { id: 4, text: 'Checking memory integrity... OK', delay: 1300, type: 'success' },
  { id: 5, text: 'Starting service: Threat_Detection_Platform.service', delay: 1800, type: 'info' },
  { id: 6, text: 'Starting service: Asset_Discovery_Pipeline.service', delay: 2200, type: 'info' },
  { id: 7, text: 'Loading module: CEH.cert... [LOADED]', delay: 2600, type: 'success' },
  { id: 8, text: 'Loading module: PQC_Research.paper (IEEE)... [LOADED]', delay: 2900, type: 'success' },
  { id: 9, text: 'Note: Curiosity module enabled (non-disableable).', delay: 3400, type: 'warning' },
  { id: 10, text: 'Warning: Perfectionism level high. Monitoring system load...', delay: 3800, type: 'warning' },
  { id: 11, text: 'Connecting to global threat feed... [CONNECTED]', delay: 4200, type: 'success' },
  { id: 12, text: 'System Ready.', delay: 4500, type: 'success' },
  { id: 13, text: 'User: arpitsivakumar@cyber-lab logged in.', delay: 4600, type: 'info' },
];

export const SKILLS: SkillModule[] = [
  // Certs
  { name: 'Certified Ethical Hacker (CEH)', category: 'cert' },
  { name: 'CCNA (Expected)', category: 'cert' },
  // Tools
  { name: 'Splunk', category: 'tools', description: 'SIEM & log correlation' },
  { name: 'OpenVAS', category: 'tools', description: 'Vulnerability scanning' },
  { name: 'Burp Suite', category: 'tools', description: 'Web app security testing' },
  { name: 'Wireshark', category: 'tools', description: 'Packet analysis' },
  { name: 'Nmap', category: 'tools', description: 'Network reconnaissance' },
  { name: 'Metasploit', category: 'tools', description: 'Exploitation framework' },
  // Core
  { name: 'Python', category: 'core' },
  { name: 'Bash Scripting', category: 'core' },
  { name: 'SQL', category: 'core' },
  { name: 'C/C++', category: 'core' },
  // Infra
  { name: 'Linux (Debian/RHEL)', category: 'infra' },
  { name: 'Docker & K8s', category: 'infra' },
  { name: 'Azure', category: 'infra' },
  { name: 'TCP/IP & Networking', category: 'infra' },
  // Foundation
  { name: 'SIEM & SOC Workflows', category: 'foundation' },
  { name: 'Incident Response', category: 'foundation' },
  { name: 'OWASP Top 10', category: 'foundation' },
  { name: 'MITRE ATT&CK', category: 'foundation' },
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
      'Reduced false positives by 43% and improved detection accuracy by 35% through fine-tuning.',
      'Ran OpenVAS scans on 250+ endpoints to identify BIOS misconfigurations and unauthorized service exposure.',
      'Hardened BIOS and USB policies on 130 systems, cutting the removable-media attack surface by 67%.',
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
      impact: 'Reduced false positives by 43% and achieved 35% better anomaly detection accuracy.'
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
      impact: 'Discovered 100+ previously unknown assets with 98% precision in lab testing.'
    }
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Top 50 @ HackTheBox',
    value: 'Top 50',
    description: 'Global ranking among 10,000+ participants. Demonstrated advanced pentesting skills.',
    icon: Terminal
  },
  {
    id: 2,
    title: 'IEEE Research Author',
    value: '1 Paper',
    description: 'Lead author on Post-Quantum Cryptography research. Achieved 57.4% performance gain.',
    icon: BookOpen
  },
  {
    id: 3,
    title: 'Certified Ethical Hacker',
    value: 'CEH',
    description: 'Certified by EC-Council. Validated offensive security knowledge.',
    icon: Shield
  },
  {
    id: 4,
    title: 'Impact',
    value: '43%',
    description: 'Reduction in false positives achieved during NPCIL internship.',
    icon: Zap
  }
];
