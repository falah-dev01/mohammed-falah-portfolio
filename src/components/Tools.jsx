import { SiSplunk, SiBurpsuite, SiMetasploit, SiWireshark, SiKalilinux } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

const Tools = () => {
    const tools = [
        { name: "Splunk", icon: <SiSplunk size={50} className="text-[#000000]" /> }, // Splunk brand color is overly complex, black/slate is safer for this theme or specific hex
        { name: "Burp Suite", icon: <SiBurpsuite size={50} className="text-[#FF6633]" /> },
        { name: "Metasploit", icon: <SiMetasploit size={50} className="text-[#104C91]" /> }, // Metasploit blue
        { name: "Wireshark", icon: <SiWireshark size={50} className="text-[#1679A7]" /> },
        { name: "Nmap", icon: <FaNetworkWired size={50} className="text-[#4D7C0F]" /> }, // Nmap doesn't have a perfect Si icon, using generic Network or similar. FaNetworkWired is a good proxy. Or SiKalilinux for general tools.
        { name: "Kali Linux", icon: <SiKalilinux size={50} className="text-[#557C94]" /> }
    ];

    return (
        <section id="tools" className="section">
            <div className="container">
                <h2 className="section-title">Familiar <span className="highlight">Tools</span></h2>
                <p className="section-subtitle">
                    Industry-standard software and platforms I utilize for security operations.
                </p>

                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <div key={index} className="tool-card">
                            <div className="tool-icon">
                                {tool.icon}
                            </div>
                            <p className="tool-name">{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
