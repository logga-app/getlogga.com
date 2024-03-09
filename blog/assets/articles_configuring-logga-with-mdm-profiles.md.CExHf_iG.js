import{_ as o,c as e,o as a,a2 as t}from"./chunks/framework.CBOTroAR.js";const u=JSON.parse('{"title":"Corporate macOS audit logging with MDM","description":"Learn how to deploy logga on macOS in a corporate environment using MDM profiles.","frontmatter":{"outline":"deep","title":"Corporate macOS audit logging with MDM","description":"Learn how to deploy logga on macOS in a corporate environment using MDM profiles."},"headers":[],"relativePath":"articles/configuring-logga-with-mdm-profiles.md","filePath":"articles/configuring-logga-with-mdm-profiles.md"}'),i={name:"articles/configuring-logga-with-mdm-profiles.md"},n=t('<h1 id="corporate-macos-audit-logging-with-mdm" tabindex="-1">Corporate macOS audit logging with MDM <a class="header-anchor" href="#corporate-macos-audit-logging-with-mdm" aria-label="Permalink to &quot;Corporate macOS audit logging with MDM&quot;">​</a></h1><p>From day one, logga was built with Mobile Device Management in mind. logga is not a trivial product: it is &quot;highly privileged&quot; application that has access to sensitive system information. For this reason, macOS handles logga with extra caution, requiring extra approvals from the user to launch the application. That being said, we tried to make the onboarding experience as &quot;dumb&quot; and simple as possible: this is where MDM comes into picture.</p><h2 id="deploy-and-configure-logga-with-mdm" tabindex="-1">Deploy and configure logga with MDM <a class="header-anchor" href="#deploy-and-configure-logga-with-mdm" aria-label="Permalink to &quot;Deploy and configure logga with MDM&quot;">​</a></h2><p>With MDM, system administrators and organizations can benefit from a &quot;hands-free&quot; (without physical access to the macOS machine) setup experience. Use your favorite MDM provider, like <a href="https://jamf.com" target="_blank" rel="noreferrer">Jamf</a> or <a href="https://www.kandji.io" target="_blank" rel="noreferrer">Kandji</a> to make managing logga frictionless.</p><ol><li>Deploy System Policies to enable <code>Full Disk Access</code> for logga <ul><li>Allow loading logga <code>System Extension</code> automatically (without manual approval form user)</li></ul></li><li>Deploy a Configuration Profile from your MDM provider to configure logga, and to keep logga managemnt in a single place</li><li>Use MDM to install logga on your macOS fleet via <code>pkg</code> installers</li><li>Run <code>/Applications/logga.app/Contents/MacOS/logga load</code> to load the Extension, and start to collecting <strong>audit</strong> and <strong>access</strong> logs</li></ol><h2 id="democratizing-audit-logging" tabindex="-1">Democratizing audit logging <a class="header-anchor" href="#democratizing-audit-logging" aria-label="Permalink to &quot;Democratizing audit logging&quot;">​</a></h2><p>Be a small team with a few MacBooks, or a huge corporation with huge macOS fleet, we belive you can massively benefit from using MDM. That is why we don&#39;t want to charge extra for &quot;enterprise&quot; features.</p><p>See more details on how logga can be deployed and configured using MDM in the <a href="https://docs.getlogga.com/building-blocks/full-disk-access" target="_blank" rel="noreferrer">documentation</a>. If you need help with setting up logga, <a href="mailto:peter@getlogga.com">contact support</a> or open an issue on <a href="https://github.com/logga-app/logga-public/issues/new">Github</a>.</p>',8),r=[n];function l(g,s,c,d,p,h){return a(),e("div",null,r)}const f=o(i,[["render",l]]);export{u as __pageData,f as default};
