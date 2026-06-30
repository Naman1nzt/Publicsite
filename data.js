/* ════════════════════════════════════════════════════════════════
   YOUR CONTENT LIVES HERE.  Edit THIS file — not index.html.
   index.html is just the engine; if it ever breaks, this file
   (all your project data) is completely untouched, and vice-versa.

   SITE  → your name, email, GitHub handle, and hero text.
   DATA  → your four layers and every project inside them.

   Each project can optionally include:
     images: ["images/your-screenshot.png"]    shown on the project page
     repo:   "https://github.com/you/repo"      the "View repository" button
     links:  [{label:"...", url:"..."}, ...]    extra repos / scripts / demos
   Leave any of them out and the page falls back sensibly.

   The "ArcGIS Enterprise on AWS" project below shows all three in use.

   NOTE: repo / link URLs point at repos under your GitHub account —
   create the repo (or change the URL) or the link will 404.
   ════════════════════════════════════════════════════════════════ */

const SITE = {
  name:   "Naman Srivastava",
  email:  "naman.srivastava097@gmail.com",
  github: "Naman1nzt",
  headlineHTML: 'I architect geospatial systems that span the <span class="ac">globe</span>.',
  intro:  "Enterprise & cloud GIS — migrations, deployments, automation, and analysis. Pick a layer to explore the work."
};

const DATA = {
  architecture:{ id:"L01", label:"Architecture & Deployment", color:"#2bbcb1",
    blurb:"Designing and standing up enterprise GIS that holds under real load.",
    points:[
      {name:"ArcGIS Enterprise on AWS", lat:19.07, lon:72.87, role:"Lead solution architect", loc:"Mumbai region",
       images:["images/sample-poc.png"],
       repo:"https://github.com/Naman1nzt/arcgis-enterprise-on-aws",
       links:[{label:"Terraform module",url:"https://github.com/Naman1nzt/arcgis-enterprise-on-aws"},
              {label:"Deployment runbook",url:"https://github.com/Naman1nzt/arcgis-enterprise-on-aws#readme"}],
       problem:"The client needed a resilient, scalable ArcGIS Enterprise platform without committing to over-provisioned fixed hardware.",
       approach:"Designed a multi-tier deployment on AWS behind a load balancer with autoscaling groups, provisioned end-to-end with Terraform so every environment is reproducible.",
       outcome:"Capacity that scales with demand, identical staging and production environments, and the whole platform defined as code.",
       tradeoff:"Chose managed autoscaling over a fixed HA pair — more elasticity, at the cost of more careful cold-start and licensing tuning.",
       tech:["AWS","Terraform","ArcGIS Enterprise","Auto Scaling"]},
      {name:"Hexagon to Esri migration", lat:25.20, lon:55.27, role:"Migration architect", loc:"Dubai",
       problem:"A legacy Hexagon/GeoMedia stack had to move into the Esri ecosystem with zero data loss and a clear audit trail.",
       approach:"Built an FME-driven pipeline mapping legacy schemas to the Esri data model, with validation and reconciliation at each stage.",
       outcome:"A clean, auditable cutover with documented data lineage end to end.",
       tradeoff:"Staged the migration feature-class by feature-class rather than a big-bang cutover — slower, but reversible at every step.",
       tech:["FME","Esri","Oracle","Python"]},
      {name:"HA GeoServer and PostGIS", lat:28.61, lon:77.21, role:"Platform architect", loc:"Delhi",
       problem:"An open-source serving layer needed high availability for public-facing maps.",
       approach:"Clustered GeoServer behind a load balancer over a replicated PostGIS backend, with automated failover and health checks.",
       outcome:"No single point of failure in the serving tier; maintenance without downtime.",
       tradeoff:"Added operational complexity vs a single node — justified by the uptime requirement.",
       tech:["GeoServer","PostGIS","High Availability"]},
      {name:"Enterprise 10.9.1 to 11.5 upgrade", lat:51.50, lon:-0.12, role:"Upgrade lead", loc:"London",
       problem:"An enterprise deployment was several versions behind, with VertiGIS and custom JS apps at risk during the jump.",
       approach:"Built a staged upgrade path with a rehearsal environment, validating VertiGIS and JS apps at each hop, with ArcGIS Monitor watching health throughout.",
       outcome:"Upgraded with every app intact and a tested rollback plan in hand.",
       tradeoff:"Insisted on a full rehearsal environment — extra setup time bought a near risk-free production upgrade.",
       tech:["ArcGIS Enterprise","VertiGIS","ArcGIS Monitor","Azure"]}
    ]},
  automation:{ id:"L02", label:"Automation & Design", color:"#4f9be8",
    blurb:"Pipelines, monitoring, and field apps that run themselves.",
    points:[
      {name:"FME automation pipelines", lat:50.11, lon:8.68, role:"Automation engineer", loc:"Frankfurt",
       problem:"Manual data preparation was slow, repetitive, and error-prone.",
       approach:"Authored reusable FME workspaces triggered on a schedule, with structured logging and failure notifications.",
       outcome:"Hands-off data flows with a full audit trail and far fewer manual errors.",
       tech:["FME","Python"]},
      {name:"AWS Lambda jobs", lat:53.35, lon:-6.26, role:"Cloud engineer", loc:"Dublin",
       problem:"Event-driven spatial processing was needed without standing servers running idle.",
       approach:"Serverless functions on AWS Lambda handle jobs on trigger, scaling to zero when idle.",
       outcome:"Pay-per-use processing with no idle infrastructure cost.",
       tech:["AWS Lambda","Python"]},
      {name:"Survey123 field apps", lat:-1.29, lon:36.82, role:"Solution designer", loc:"Nairobi",
       problem:"Field teams needed reliable offline data capture that fed straight into reporting.",
       approach:"Designed Survey123 forms with validation and an offline-first workflow feeding a central dashboard.",
       outcome:"Faster, cleaner field collection with near-real-time visibility.",
       tech:["Survey123","ArcGIS"]},
      {name:"Observability stack", lat:48.85, lon:2.35, role:"Reliability lead", loc:"Paris",
       problem:"There was no unified view of platform health across services.",
       approach:"Stood up CloudWatch, Datadog, and ArcGIS Monitor dashboards with alerting on the signals that matter.",
       outcome:"Issues are caught and resolved before users ever notice them.",
       tech:["Datadog","CloudWatch","ArcGIS Monitor"]}
    ]},
  usecases:{ id:"L03", label:"Business Use Cases", color:"#e0922f",
    blurb:"Turning geospatial capability into operational outcomes.",
    points:[
      {name:"City gas utility network", lat:22.57, lon:88.36, role:"GIS consultant", loc:"Eastern India",
       problem:"A city gas distributor needed its pipeline network in a managed GIS with operational dashboards.",
       approach:"Built the network data model, asset-health dashboards, and monitoring on top of ArcGIS Enterprise.",
       outcome:"A single source of truth for the network and faster operational decisions.",
       tech:["ArcGIS Enterprise","Dashboards"]},
      {name:"Public-health spatial programme", lat:26.91, lon:75.79, role:"GIS consultant", loc:"Western India",
       problem:"A public-health institute needed spatial data programmes to support research.",
       approach:"Set up data capture, analysis workflows, and visualisation tuned to their research questions.",
       outcome:"Location-aware insight feeding public-health decisions.",
       tech:["ArcGIS","Survey123"]},
      {name:"Water and wastewater demo", lat:1.35, lon:103.82, role:"Solution architect", loc:"Singapore",
       problem:"A utility wanted to see sewage-deposition analysis brought to life before committing.",
       approach:"Built a focused demo combining network data with deposition modelling and clear visuals.",
       outcome:"A compelling proof-of-concept that moved the conversation forward.",
       tech:["ArcGIS Pro","Spatial Analysis"]},
      {name:"Records digitisation", lat:13.75, lon:100.50, role:"Delivery lead", loc:"Bangkok",
       problem:"Legacy paper and CAD records were not usable as spatial data.",
       approach:"Designed a digitisation workflow converting legacy records into managed, validated spatial assets.",
       outcome:"A searchable, analysable spatial archive from what used to be filing cabinets.",
       tech:["ArcGIS","FME"]}
    ]},
  analysis:{ id:"L04", label:"Analysis", color:"#9b8cf0",
    blurb:"Spatial analysis that answers the question behind the question.",
    points:[
      {name:"Suitability modelling", lat:43.65, lon:-79.38, role:"Spatial analyst", loc:"Toronto",
       problem:"Candidate locations had to be ranked against several weighted, competing criteria.",
       approach:"Built a weighted-overlay suitability model in ArcGIS Pro with transparent, tunable weights.",
       outcome:"A defensible ranked shortlist of sites, with the reasoning visible.",
       tech:["ArcGIS Pro","Spatial Analyst"]},
      {name:"Network and routing", lat:40.71, lon:-74.00, role:"Spatial analyst", loc:"New York",
       problem:"Service routes across a road network needed optimising under real constraints.",
       approach:"Network analysis with cost surfaces and operational constraints baked in.",
       outcome:"Shorter, genuinely feasible routes that crews could actually run.",
       tech:["Network Analyst","Python"]},
      {name:"Hotspot detection", lat:19.43, lon:-99.13, role:"Spatial analyst", loc:"Mexico City",
       problem:"Decision-makers needed to know where incident clusters were statistically real, not just visually busy.",
       approach:"Hotspot / Getis-Ord analysis with significance testing on the incident data.",
       outcome:"Evidence-based prioritisation of where to act first.",
       tech:["Spatial Statistics","ArcGIS Pro"]},
      {name:"Change detection by remote sensing", lat:-23.55, lon:-46.63, role:"Remote-sensing analyst", loc:"Sao Paulo",
       problem:"Land change over time had to be measured, not estimated by eye.",
       approach:"Multi-temporal remote-sensing change detection across satellite imagery.",
       outcome:"Quantified change with a repeatable, defensible method.",
       tech:["Remote Sensing","Python"]}
    ]}
};
