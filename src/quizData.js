const quizData = [
    {
      "question": "analyze data directly in Amazon S3 by using standard SQL",
      "options": [
        "Amazon Redshift Spectrum",
        "AWS Glue",
        "Amazon Athena",
        "Amazon Aurora"
      ],
      "answer": "Amazon Athena"
    },
    {
      "question": "find, subscribe to, and use third-party data in the cloud",
      "options": [
        "AWS Marketplace",
        "AWS Data Exchange",
        "Amazon AppFlow",
        "AWS Glue Catalog"
      ],
      "answer": "AWS Data Exchange"
    },
    {
      "question": "run big data frameworks, such as Apache Hadoop and Apache Spark, to process and analyze vast amounts of data",
      "options": [
        "Amazon Kinesis Data Analytics",
        "Amazon EMR",
        "AWS Batch",
        "AWS Glue ETL"
      ],
      "answer": "Amazon EMR"
    },
    {
      "question": "discover, prepare, move, and integrate data from multiple sources (ETL)",
      "options": [
        "AWS Data Pipeline",
        "AWS Glue",
        "Amazon QuickSight",
        "AWS Lake Formation"
      ],
      "answer": "AWS Glue"
    },
    {
      "question": "collect, process, and analyze video streams and data streams in near real-time",
      "options": [
        "Amazon Kinesis Data Streams",
        "AWS IoT Core",
        "AWS Lambda",
        "Amazon Kinesis Video Streams"
      ],
      "answer": "Amazon Kinesis Data Streams"
    },
    {
      "question": "build and run applications that use Apache Kafka to process streaming data",
      "options": [
        "Amazon MSK",
        "AWS Lambda",
        "Amazon Kinesis Data Streams",
        "AWS Batch"
      ],
      "answer": "Amazon MSK"
    },
    {
      "question": "deploy, operate, and scale OpenSearch clusters in the cloud",
      "options": [
        "Amazon Elasticsearch Service",
        "Amazon OpenSearch Service",
        "AWS RDS",
        "Amazon Neptune"
      ],
      "answer": "Amazon OpenSearch Service"
    },
    {
      "question": "business intelligence service that provides insights in a single data dashboard",
      "options": [
        "AWS Data Pipeline",
        "Amazon QuickSight",
        "AWS Glue DataBrew",
        "Amazon Lookout for Metrics"
      ],
      "answer": "Amazon QuickSight"
    },
    {
      "question": "use events to connect application components together, build scalable event-driven applications",
      "options": [
        "AWS Step Functions",
        "Amazon EventBridge",
        "Amazon SNS",
        "AWS Lambda"
      ],
      "answer": "Amazon EventBridge"
    },
    {
      "question": "provides message delivery from publishers to subscribers",
      "options": [
        "Amazon SNS",
        "AWS Simple Queue Service (SQS)",
        "Amazon Kinesis",
        "Amazon MQ"
      ],
      "answer": "Amazon SNS"
    },
    {
      "question": "provides a queue to integrate and decouple distributed software systems and components",
      "options": [
        "AWS Step Functions",
        "Amazon SNS",
        "Amazon SQS",
        "AWS AppSync"
      ],
      "answer": "Amazon SQS"
    },
    {
      "question": "integrate with Lambda functions and view application workflows as a series of event-driven steps",
      "options": [
        "AWS Step Functions",
        "Amazon EventBridge",
        "AWS CodePipeline",
        "Amazon SWF (Simple Workflow)"
      ],
      "answer": "AWS Step Functions"
    },
    {
      "question": "omnichannel cloud contact center",
      "options": [
        "Amazon Connect",
        "AWS IoT Core",
        "Amazon Chime",
        "Amazon CloudFront"
      ],
      "answer": "Amazon Connect"
    },
    {
      "question": "send and receive emails through existing email addresses and domains",
      "options": [
        "Amazon SES",
        "Amazon SNS",
        "AWS Pinpoint",
        "Amazon Connect"
      ],
      "answer": "Amazon SES"
    },
    {
      "question": "custom billing service that can support showback and chargeback workflows of AWS Solution Providers and Enterprise customers",
      "options": [
        "AWS Cost Explorer",
        "AWS Billing Conductor",
        "AWS Budgets",
        "AWS Trusted Advisor"
      ],
      "answer": "AWS Billing Conductor"
    },
    {
      "question": "set a monthly cost budget with alerts for actual spend or forecasted spend",
      "options": [
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Billing Conductor",
        "AWS Trusted Advisor"
      ],
      "answer": "AWS Budgets"
    },
    {
      "question": "contains the most comprehensive set of cost and usage data available",
      "options": [
        "AWS Cost Explorer",
        "AWS Usage Reports",
        "AWS Billing Conductor",
        "AWS Cost and Usage Report"
      ],
      "answer": "AWS Cost and Usage Report"
    },
    {
      "question": "visualize cost and usage over time, including the past 12 months and a forecast of the next 12 months",
      "options": [
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Trusted Advisor",
        "AWS Cost and Usage Report"
      ],
      "answer": "AWS Cost Explorer"
    },
    {
      "question": "curated digital catalog of third-party software, data, and services",
      "options": [
        "AWS Data Exchange",
        "AWS Marketplace",
        "AWS Glue Catalog",
        "AWS AppFlow"
      ],
      "answer": "AWS Marketplace"
    },
    {
      "question": "run batch computing workloads",
      "options": [
        "AWS Batch",
        "AWS Glue ETL",
        "AWS Lambda",
        "AWS Step Functions"
      ],
      "answer": "AWS Batch"
    },
    {
      "question": "provides scalable computing capacity in the AWS Cloud",
      "options": [
        "Amazon Lightsail",
        "AWS Elastic Beanstalk",
        "AWS Fargate",
        "Amazon EC2"
      ],
      "answer": "Amazon EC2"
    },
    {
      "question": "allows developers to deploy and monitor health of applications without managing underlying infrastructure (PaaS)",
      "options": [
        "AWS Elastic Beanstalk",
        "AWS App Runner",
        "AWS Fargate",
        "Amazon ECS"
      ],
      "answer": "AWS Elastic Beanstalk"
    },
    {
      "question": "run code without the need to provision or manage servers",
      "options": [
        "AWS Lambda",
        "Amazon ECS",
        "AWS Fargate",
        "AWS Batch"
      ],
      "answer": "AWS Lambda"
    },
    {
      "question": "launch projects quickly from a simple management interface with little cloud experience",
      "options": [
        "Amazon Lightsail",
        "AWS Elastic Beanstalk",
        "Amazon EC2",
        "AWS CloudFormation"
      ],
      "answer": "Amazon Lightsail"
    },
    {
      "question": "extends AWS infrastructure, services, APIs, and tools to customer premises",
      "options": [
        "AWS Outposts",
        "AWS Local Zones",
        "AWS Direct Connect",
        "AWS Wavelength"
      ],
      "answer": "AWS Outposts"
    },
    {
      "question": "container image registry that is secure, scalable, and reliable",
      "options": [
        "Amazon ECR",
        "AWS CodeArtifact",
        "AWS Marketplace",
        "AWS Fargate"
      ],
      "answer": "Amazon ECR"
    },
    {
      "question": "deploy, manage, and scale containerized applications",
      "options": [
        "Amazon ECS",
        "AWS Lambda",
        "AWS App Runner",
        "Amazon EKS"
      ],
      "answer": "Amazon ECS"
    },
    {
      "question": "run Kubernetes without the need to install, operate, or maintain the Kubernetes control plane or nodes",
      "options": [
        "AWS Fargate",
        "AWS App Runner",
        "Amazon EKS",
        "Amazon ECS"
      ],
      "answer": "Amazon EKS"
    },
    {
      "question": "works with Amazon ECS to run containers without the need to manage servers or EC2 instances",
      "options": [
        "AWS Lambda",
        "AWS App Runner",
        "AWS Fargate",
        "Amazon EC2 Auto Scaling"
      ],
      "answer": "AWS Fargate"
    },
    {
      "question": "provides resources to help startups build and grow on AWS",
      "options": [
        "AWS Activate",
        "AWS IQ",
        "Amazon Lightsail",
        "AWS Marketplace"
      ],
      "answer": "AWS Activate"
    },
    {
      "question": "connects users to AWS Certified experts for help with AWS projects",
      "options": [
        "AWS IQ",
        "AWS Support",
        "AWS Trusted Advisor",
        "AWS Activate"
      ],
      "answer": "AWS IQ"
    },
    {
      "question": "provides ongoing management for a user’s AWS infrastructure",
      "options": [
        "AWS Managed Services",
        "AWS Support",
        "AWS Trusted Advisor",
        "AWS Service Catalog"
      ],
      "answer": "AWS Managed Services"
    },
    {
      "question": "database engine that is compatible with MySQL and PostgreSQL",
      "options": [
        "Amazon RDS",
        "Amazon Aurora",
        "Amazon Neptune",
        "AWS Timestream"
      ],
      "answer": "Amazon Aurora"
    },
    {
      "question": "NoSQL database service with fast and predictable performance and seamless scalability; schemaless",
      "options": [
        "Amazon DynamoDB",
        "Amazon Timestream",
        "Amazon RDS",
        "Amazon Neptune"
      ],
      "answer": "Amazon DynamoDB"
    },
    {
      "question": "durable, in-memory database service that delivers ultra-fast performance",
      "options": [
        "Amazon ElastiCache",
        "Amazon MemoryDB for Redis",
        "Amazon RDS",
        "Amazon Timestream"
      ],
      "answer": "Amazon MemoryDB for Redis"
    },
    {
      "question": "graph database service for highly connected datasets",
      "options": [
        "Amazon Neptune",
        "Amazon DynamoDB",
        "Amazon Timestream",
        "Amazon ElastiCache"
      ],
      "answer": "Amazon Neptune"
    },
    {
      "question": "set up, operate, and scale a relational database in the cloud",
      "options": [
        "Amazon RDS",
        "Amazon Aurora",
        "Amazon DynamoDB",
        "Amazon Redshift"
      ],
      "answer": "Amazon RDS"
    },
    {
      "question": "petabyte-scale data warehouse with automatically provisioned resources and intelligent scaling",
      "options": [
        "Amazon RDS",
        "Amazon Redshift",
        "Amazon Aurora",
        "Amazon Neptune"
      ],
      "answer": "Amazon Redshift"
    },
    {
      "question": "create, manage, and quickly deploy application configurations",
      "options": [
        "AWS AppConfig",
        "AWS CloudFormation",
        "AWS App Runner",
        "Amazon ECS"
      ],
      "answer": "AWS AppConfig"
    },
    {
      "question": "interact with AWS services through commands in the command-line shell",
      "options": [
        "AWS Step Functions",
        "Amazon RDS",
        "AWS Key Management Service (KMS)",
        "AWS CLI"
      ],
      "answer": "AWS CLI"
    },
    {
      "question": "an integrated development environment (IDE) with a built-in terminal that supports several programming languages",
      "options": [
        "AWS Identity and Access Management (IAM)",
        "Amazon SQS",
        "AWS X-Ray",
        "AWS Cloud9"
      ],
      "answer": "AWS Cloud9"
    },
    {
      "question": "a browser-based, pre-authenticated shell that users can launch directly from the console",
      "options": [
        "AWS CloudShell",
        "AWS Lambda",
        "AWS CodePipeline",
        "Amazon CloudWatch"
      ],
      "answer": "AWS CloudShell"
    },
    {
      "question": "artifact repository that helps companies to store and share software packages for application development",
      "options": [
        "AWS CodeArtifact",
        "Amazon RDS",
        "Amazon SNS",
        "Amazon CloudFront"
      ],
      "answer": "AWS CodeArtifact"
    },
    {
      "question": "compiles source code, runs unit tests, and produces artifacts that are ready to deploy",
      "options": [
        "AWS CodePipeline",
        "AWS Key Management Service (KMS)",
        "AWS CodeBuild",
        "Amazon CloudWatch"
      ],
      "answer": "AWS CodeBuild"
    },
    {
      "question": "host private Git repositories, store and manage assets",
      "options": [
        "AWS Snowball",
        "AWS Step Functions",
        "Amazon DynamoDB",
        "AWS CodeCommit"
      ],
      "answer": "AWS CodeCommit"
    },
    {
      "question": "automate application deployments to on-premises instances or select AWS resources",
      "options": [
        "Amazon SQS",
        "AWS CodeDeploy",
        "AWS CodePipeline",
        "Amazon Cognito"
      ],
      "answer": "AWS CodeDeploy"
    },
    {
      "question": "model, visualize, and automate the steps to release software with continuous delivery",
      "options": [
        "AWS CodePipeline",
        "Amazon CloudFront",
        "Amazon Kinesis",
        "Amazon CloudWatch"
      ],
      "answer": "AWS CodePipeline"
    },
    {
      "question": "Streamline the development and delivery of scalable apps on AWS with an integrated experience",
      "options": [
        "AWS Step Functions",
        "Amazon CloudFront",
        "AWS CodeCatalyst",
        "AWS CodeBuild"
      ],
      "answer": "AWS CodeCatalyst"
    },
    {
      "question": "use software development kits to develop applications in your preferred programming language",
      "options": [
        "Amazon RDS",
        "Amazon Cognito",
        "AWS X-Ray",
        "AWS SDK"
      ],
      "answer": "AWS SDK"
    },
    {
      "question": "collects data about application requests and provides tools to view, filter, and gain insights into the data",
      "options": [
        "Amazon CloudWatch",
        "Amazon SNS",
        "AWS X-Ray",
        "AWS Snowball"
      ],
      "answer": "AWS X-Ray"
    },
    {
      "question": "application streaming service that provides users with instant access to desktop applications from anywhere",
      "options": [
        "Amazon SageMaker",
        "AWS CloudFormation",
        "Amazon AppStream 2.0",
        "AWS AppSync"
      ],
      "answer": "Amazon AppStream 2.0"
    },
    {
      "question": "provision virtual, cloud-based desktops without the need to deploy hardware or install complex software",
      "options": [
        "Amazon WorkSpaces",
        "AWS CloudFormation",
        "Amazon CloudFront",
        "Amazon SQS"
      ],
      "answer": "Amazon WorkSpaces"
    },
    {
      "question": "facilitates secure browser access to internal websites and SaaS applications",
      "options": [
        "Amazon SNS",
        "Amazon WorkSpaces Web",
        "Amazon DynamoDB",
        "AWS Key Management Service (KMS)"
      ],
      "answer": "Amazon WorkSpaces Web"
    },
    {
      "question": "set of purpose-built tools and features to build full-stack mobile applications",
      "options": [
        "Amazon SNS",
        "AWS CodeBuild",
        "AWS Amplify",
        "AWS CloudFormation"
      ],
      "answer": "AWS Amplify"
    },
    {
      "question": "connect mobile applications and services to data and events with GraphQL and pub/sub APIs",
      "options": [
        "AWS CloudFormation",
        "AWS AppSync",
        "Amazon S3",
        "AWS X-Ray"
      ],
      "answer": "AWS AppSync"
    },
    {
      "question": "app testing for Android, iOS, and web apps",
      "options": [
        "AWS Device Farm",
        "AWS CodeCommit",
        "Amazon S3",
        "Amazon Kinesis"
      ],
      "answer": "AWS Device Farm"
    },
    {
      "question": "connect and process messages between IoT devices and IoT services",
      "options": [
        "AWS AppSync",
        "Amazon Kinesis",
        "AWS IoT Core",
        "Amazon CloudWatch"
      ],
      "answer": "AWS IoT Core"
    },
    {
      "question": "build, deploy, and manage IoT edge runtime applications on devices",
      "options": [
        "AWS Fargate",
        "AWS Trusted Advisor",
        "AWS IoT Greengrass",
        "Amazon Kinesis"
      ],
      "answer": "AWS IoT Greengrass"
    },
    {
      "question": "uses natural language processing (NLP) to extract insights from documents",
      "options": [
        "AWS Trusted Advisor",
        "Amazon RDS",
        "Amazon Comprehend",
        "AWS Lambda"
      ],
      "answer": "Amazon Comprehend"
    },
    {
      "question": "intelligent search service that uses NLP and ML algorithms",
      "options": [
        "Amazon Kendra",
        "AWS CodeCommit",
        "Amazon RDS",
        "Amazon DynamoDB"
      ],
      "answer": "Amazon Kendra"
    },
    {
      "question": "build conversational interfaces for applications that use voice and text",
      "options": [
        "AWS Lambda",
        "Amazon Lex",
        "AWS Glue",
        "AWS Trusted Advisor"
      ],
      "answer": "Amazon Lex"
    },
    {
      "question": "convert text into lifelike speech",
      "options": [
        "Amazon Polly",
        "AWS CodeBuild",
        "AWS Fargate",
        "AWS Data Exchange"
      ],
      "answer": "Amazon Polly"
    },
    {
      "question": "identify objects, people, text, scenes, and activities in images and videos",
      "options": [
        "Amazon Rekognition",
        "AWS Snowball",
        "AWS CloudFormation",
        "AWS Identity and Access Management (IAM)"
      ],
      "answer": "Amazon Rekognition"
    },
    {
      "question": "build and train ML models, then deploy the models in a production-ready hosted environment",
      "options": [
        "AWS CodeBuild",
        "AWS Snowball",
        "Amazon SageMaker",
        "Amazon Elasticsearch Service"
      ],
      "answer": "Amazon SageMaker"
    },
    {
      "question": "automatically extract text, handwriting, and data from scanned documents",
      "options": [
        "AWS Snowball",
        "Amazon SQS",
        "AWS X-Ray",
        "Amazon Textract"
      ],
      "answer": "Amazon Textract"
    },
    {
      "question": "automatic speech recognition that converts audio to text",
      "options": [
        "Amazon CloudFront",
        "Amazon Transcribe",
        "Amazon SageMaker",
        "AWS Trusted Advisor"
      ],
      "answer": "Amazon Transcribe"
    },
    {
      "question": "translate unstructured text documents or build applications that work in multiple languages",
      "options": [
        "AWS Glue",
        "Amazon Redshift",
        "AWS CodeBuild",
        "Amazon Translate"
      ],
      "answer": "Amazon Translate"
    },
    {
      "question": "monitors applications to automatically scale resources dynamically by adjusting capacity based on defined thresholds",
      "options": [
        "Amazon EC2",
        "AWS CodePipeline",
        "AWS Step Functions",
        "AWS Auto Scaling"
      ],
      "answer": "AWS Auto Scaling"
    },
    {
      "question": "model, set up, and create templates of AWS resources",
      "options": [
        "AWS CloudFormation",
        "AWS Identity and Access Management (IAM)",
        "Amazon SNS",
        "AWS Lambda"
      ],
      "answer": "AWS CloudFormation"
    },
    {
      "question": "records actions taken by users in the console, AWS CLI, AWS SDKs, and APIs",
      "options": [
        "AWS Lambda",
        "AWS AppSync",
        "AWS CloudTrail",
        "AWS Key Management Service (KMS)"
      ],
      "answer": "AWS CloudTrail"
    },
    {
      "question": "monitors resources and applications, collects and tracks metrics, has alarms",
      "options": [
        "Amazon CloudWatch",
        "AWS Snowball",
        "Amazon Elasticsearch Service",
        "AWS Trusted Advisor"
      ],
      "answer": "Amazon CloudWatch"
    },
    {
      "question": "analyzes the configuration and utilization metrics of resources, provides optimization recommendations",
      "options": [
        "AWS Snowball",
        "AWS CodePipeline",
        "Amazon RDS",
        "AWS Compute Optimizer"
      ],
      "answer": "AWS Compute Optimizer"
    },
    {
      "question": "provides a detailed view of AWS resource configuration, changes in configuration, and compliance",
      "options": [
        "AWS X-Ray",
        "AWS Config",
        "Amazon SNS",
        "AWS CodeCommit"
      ],
      "answer": "AWS Config"
    },
    {
      "question": "set up and govern a multi-account environment",
      "options": [
        "AWS Control Tower",
        "AWS Lambda",
        "AWS Glue",
        "AWS CodeCommit"
      ],
      "answer": "AWS Control Tower"
    },
    {
      "question": "provides ongoing visibility into resource performance and availability of AWS services and user accounts",
      "options": [
        "AWS X-Ray",
        "AWS Data Exchange",
        "AWS Glue",
        "AWS Health Dashboard"
      ],
      "answer": "AWS Health Dashboard"
    },
    {
      "question": "deploy application and domain-controller solutions to the cloud",
      "options": [
        "Amazon Elasticsearch Service",
        "AWS Launch Wizard",
        "Amazon DynamoDB",
        "Amazon EC2"
      ],
      "answer": "AWS Launch Wizard"
    },
    {
      "question": "manage software licenses from software vendors centrally across AWS and on-premises environments",
      "options": [
        "Amazon S3",
        "AWS CodeBuild",
        "AWS Snowball",
        "AWS License Manager"
      ],
      "answer": "AWS License Manager"
    },
    {
      "question": "web application used to manage AWS resources",
      "options": [
        "AWS CodeBuild",
        "AWS Management Console",
        "AWS Trusted Advisor",
        "Amazon DynamoDB"
      ],
      "answer": "AWS Management Console"
    },
    {
      "question": "account management service that can consolidate billing and accounts",
      "options": [
        "AWS Organizations",
        "AWS X-Ray",
        "Amazon S3",
        "Amazon Kinesis"
      ],
      "answer": "AWS Organizations"
    },
    {
      "question": "create and manage catalogs of IT services that are approved for AWS",
      "options": [
        "Amazon Elasticsearch Service",
        "AWS Lambda",
        "AWS Service Catalog",
        "Amazon Redshift"
      ],
      "answer": "AWS Service Catalog"
    },
    {
      "question": "automate, monitor, patch, or run commands across a fleet of EC2 and on-premises servers",
      "options": [
        "Amazon SageMaker",
        "AWS Systems Manager (SSM)",
        "Amazon DynamoDB",
        "Amazon CloudFront"
      ],
      "answer": "AWS Systems Manager (SSM)"
    },
    {
      "question": "inspects a user\u2019s AWS environment and makes recommendation regarding its performance, security, and fault tolerance",
      "options": [
        "AWS CodeCommit",
        "AWS Trusted Advisor",
        "AWS AppSync",
        "Amazon EC2"
      ],
      "answer": "AWS Trusted Advisor"
    },
    {
      "question": "provides recommendations to improve workloads based on best practices",
      "options": [
        "AWS CodeCommit",
        "AWS Well-Architected Tool",
        "AWS Identity and Access Management (IAM)",
        "AWS CloudFormation"
      ],
      "answer": "AWS Well-Architected Tool"
    },
    {
      "question": "collects usage and configuration data about on-premises servers and databases to help plan a migration to AWS",
      "options": [
        "Amazon SageMaker",
        "AWS Application Discovery Service",
        "AWS CodePipeline",
        "Amazon S3"
      ],
      "answer": "AWS Application Discovery Service"
    },
    {
      "question": "automated lift-and-shift (rehost) solution for migrations to AWS",
      "options": [
        "AWS Glue",
        "AWS Application Migration Service",
        "AWS CodeCommit",
        "AWS Snowball"
      ],
      "answer": "AWS Application Migration Service"
    },
    {
      "question": "migrate relational databases, data warehouses, NoSQL databases, and data stores to AWS",
      "options": [
        "AWS DMS (Database MIgration Service)",
        "Amazon Cognito",
        "AWS Lambda",
        "Amazon RDS"
      ],
      "answer": "AWS DMS (Database MIgration Service)"
    },
    {
      "question": "a central location to discover existing servers, plan migrations, and track the status of each application migration",
      "options": [
        "Amazon Kinesis",
        "AWS Migration Hub",
        "Amazon Cognito",
        "AWS Glue"
      ],
      "answer": "AWS Migration Hub"
    },
    {
      "question": "convert an existing database schema from one database engine to another",
      "options": [
        "Amazon S3",
        "AWS Key Management Service (KMS)",
        "AWS SCT (Schema Conversion Tool)",
        "AWS CodeBuild"
      ],
      "answer": "AWS SCT (Schema Conversion Tool)"
    },
    {
      "question": "run operations in remote, non-data center environments, and locations without network connectivity",
      "options": [
        "AWS Fargate",
        "AWS Snow Family",
        "Amazon S3",
        "AWS Glue"
      ],
      "answer": "AWS Snow Family"
    },
    {
      "question": "transfer files in to and out of AWS storage services",
      "options": [
        "Amazon Kinesis",
        "AWS Transfer Family",
        "Amazon RDS",
        "Amazon Cognito"
      ],
      "answer": "AWS Transfer Family"
    },
    {
      "question": "create, publish, and monitor REST, HTTP, and WebSocket APIs at any scale",
      "options": [
        "AWS CodeCommit",
        "Amazon Cognito",
        "AWS Trusted Advisor",
        "Amazon API Gateway"
      ],
      "answer": "Amazon API Gateway"
    },
    {
      "question": "speed up distribution of static and dynamic web content to end users through edge locations",
      "options": [
        "Amazon CloudWatch",
        "Amazon Kinesis",
        "Amazon CloudFront",
        "Amazon SNS"
      ],
      "answer": "Amazon CloudFront"
    },
    {
      "question": "a private dedicated network connection from an on-premises data center to the cloud",
      "options": [
        "Amazon CloudFront",
        "AWS Glue",
        "AWS Direct Connect",
        "AWS AppSync"
      ],
      "answer": "AWS Direct Connect"
    },
    {
      "question": "improve availability and performance of applications through a global network of endpoints",
      "options": [
        "AWS Global Accelerator",
        "AWS Fargate",
        "Amazon Cognito",
        "Amazon SQS"
      ],
      "answer": "AWS Global Accelerator"
    },
    {
      "question": "DNS service for domain registration, DNS routing, and health checking",
      "options": [
        "Amazon SageMaker",
        "Amazon S3",
        "Amazon RDS",
        "Amazon Route 53"
      ],
      "answer": "Amazon Route 53"
    },
    {
      "question": "launch AWS resources in logically isolated virtual networks",
      "options": [
        "Amazon SNS",
        "Amazon VPC",
        "AWS Trusted Advisor",
        "AWS Data Exchange"
      ],
      "answer": "Amazon VPC"
    },
    {
      "question": "establish a secure and private tunnel from on premises to the cloud",
      "options": [
        "Amazon Redshift",
        "AWS AppSync",
        "AWS VPN",
        "Amazon SageMaker"
      ],
      "answer": "AWS VPN"
    },
    {
      "question": "download security and compliance documents",
      "options": [
        "AWS Artifact",
        "AWS CloudFormation",
        "Amazon SageMaker",
        "AWS Key Management Service (KMS)"
      ],
      "answer": "AWS Artifact"
    },
    {
      "question": "continually audit AWS usage to manage risk and to comply with regulations and industry standards",
      "options": [
        "AWS Key Management Service (KMS)",
        "AWS Glue",
        "AWS Audit Manager",
        "AWS Data Exchange"
      ],
      "answer": "AWS Audit Manager"
    },
    {
      "question": "creates, stores, and renews public and private SSL/TLS certificates",
      "options": [
        "AWS Lambda",
        "Amazon CloudFront",
        "AWS Certificate Manager (ACM)",
        "AWS Identity and Access Management (IAM)"
      ],
      "answer": "AWS Certificate Manager (ACM)"
    },
    {
      "question": "provides a compute device that processes cryptographic operations and storage",
      "options": [
        "Amazon EC2",
        "AWS Snowball",
        "AWS Lambda",
        "AWS CloudHSM (Hardware Security Modules)"
      ],
      "answer": "AWS CloudHSM (Hardware Security Modules)"
    },
    {
      "question": "identity platform for web and mobile applications, including federation for third parties",
      "options": [
        "Amazon CloudFront",
        "Amazon S3",
        "Amazon Cognito",
        "AWS Key Management Service (KMS)"
      ],
      "answer": "Amazon Cognito"
    },
    {
      "question": "analyze, investigate, and identify the root cause of security findings or suspicious activities",
      "options": [
        "AWS Snowball",
        "Amazon Detective",
        "AWS AppSync",
        "AWS CodeBuild"
      ],
      "answer": "Amazon Detective"
    },
    {
      "question": "provides multiple ways to set up and run Microsoft Active Directory with AWS services",
      "options": [
        "AWS Directory Service",
        "Amazon EC2",
        "AWS CodeBuild",
        "Amazon Redshift"
      ],
      "answer": "AWS Directory Service"
    },
    {
      "question": "provides administration and maintenance tasks across multiple accounts and resources for a variety of protections",
      "options": [
        "AWS CodeBuild",
        "Amazon SQS",
        "Amazon Redshift",
        "AWS Firewall Manager"
      ],
      "answer": "AWS Firewall Manager"
    },
    {
      "question": "intelligent threat detection that provides continuous monitoring",
      "options": [
        "Amazon GuardDuty",
        "AWS Trusted Advisor",
        "Amazon EC2",
        "AWS Key Management Service (KMS)"
      ],
      "answer": "Amazon GuardDuty"
    },
    {
      "question": "helps users securely control access to AWS resources",
      "options": [
        "Amazon Kinesis",
        "Amazon DynamoDB",
        "IAM",
        "Amazon S3"
      ],
      "answer": "IAM"
    },
    {
      "question": "manage sign-in security for workforce identities",
      "options": [
        "IAM Identity Center",
        "Amazon SNS",
        "AWS Glue",
        "Amazon Kinesis"
      ],
      "answer": "IAM Identity Center"
    },
    {
      "question": "continuously scans AWS workloads for software vulnerabilities and unintended network exposure",
      "options": [
        "Amazon Inspector",
        "AWS Lambda",
        "Amazon CloudWatch",
        "Amazon RDS"
      ],
      "answer": "Amazon Inspector"
    },
    {
      "question": "create and control cryptographic keys that protect user data",
      "options": [
        "AWS Fargate",
        "Amazon RDS",
        "AWS X-Ray",
        "AWS KMS"
      ],
      "answer": "AWS KMS"
    },
    {
      "question": "discovers sensitive data, PII, and security risks, then provides automated protection against those risks",
      "options": [
        "Amazon Macie",
        "Amazon Cognito",
        "AWS AppSync",
        "Amazon EC2"
      ],
      "answer": "Amazon Macie"
    },
    {
      "question": "provides intrusion detection and prevention for a VPC",
      "options": [
        "Amazon SQS",
        "AWS Network Firewall",
        "AWS Step Functions",
        "AWS Key Management Service (KMS)"
      ],
      "answer": "AWS Network Firewall"
    },
    {
      "question": "securely share resources across AWS accounts",
      "options": [
        "AWS RAM (Resource Access Manager)",
        "AWS Fargate",
        "AWS CodePipeline",
        "AWS Step Functions"
      ],
      "answer": "AWS RAM (Resource Access Manager)"
    },
    {
      "question": "manage and rotate credentials to improve security",
      "options": [
        "AWS Secrets Manager",
        "AWS Lambda",
        "Amazon Cognito",
        "AWS Identity and Access Management (IAM)"
      ],
      "answer": "AWS Secrets Manager"
    },
    {
      "question": "collects security data across accounts and identifies priority security issues",
      "options": [
        "AWS Security Hub",
        "Amazon CloudFront",
        "Amazon Kinesis",
        "Amazon EC2"
      ],
      "answer": "AWS Security Hub"
    },
    {
      "question": "provides protection against DDoS attacks for AWS resources",
      "options": [
        "Amazon DynamoDB",
        "AWS Shield",
        "AWS X-Ray",
        "Amazon SageMaker"
      ],
      "answer": "AWS Shield"
    },
    {
      "question": "monitor HTTP(S) requests and control access to web application resources",
      "options": [
        "AWS WAF",
        "AWS Data Exchange",
        "AWS Key Management Service (KMS)",
        "Amazon S3"
      ],
      "answer": "AWS WAF"
    },
    {
      "question": "centralize and automate backups of data from AWS storage services and on-premises storage systems",
      "options": [
        "AWS Backup",
        "AWS Lambda",
        "Amazon SNS",
        "AWS CodePipeline"
      ],
      "answer": "AWS Backup"
    },
    {
      "question": "block-level storage volumes for use with EC2 instances",
      "options": [
        "AWS CodePipeline",
        "Amazon EBS",
        "Amazon SNS",
        "Amazon RDS"
      ],
      "answer": "Amazon EBS"
    },
    {
      "question": "serverless, fully scalable shared file system",
      "options": [
        "AWS CodeCommit",
        "Amazon EFS",
        "Amazon CloudFront",
        "AWS Step Functions"
      ],
      "answer": "Amazon EFS"
    },
    {
      "question": "minimizes downtime and data loss from natural catastrophes, application failures, or disruptions of service",
      "options": [
        "Amazon CloudWatch",
        "AWS Elastic Disaster Recovery",
        "AWS Data Exchange",
        "Amazon RDS"
      ],
      "answer": "AWS Elastic Disaster Recovery"
    },
    {
      "question": "launch, run, and scale 3rd-party file systems in the cloud",
      "options": [
        "Amazon CloudWatch",
        "AWS CodePipeline",
        "Amazon DynamoDB",
        "Amazon FSx"
      ],
      "answer": "Amazon FSx"
    },
    {
      "question": "scalable object storage in the cloud",
      "options": [
        "Amazon Kinesis",
        "AWS Fargate",
        "Amazon Redshift",
        "Amazon S3"
      ],
      "answer": "Amazon S3"
    },
    {
      "question": "secure and durable data archiving and long-term backup",
      "options": [
        "Amazon Redshift",
        "AWS CodeBuild",
        "Amazon S3 Glacier storage classes",
        "Amazon CloudFront"
      ],
      "answer": "Amazon S3 Glacier storage classes"
    },
    {
      "question": "connect an on-premises software appliance with cloud-based storage",
      "options": [
        "Amazon SQS",
        "Amazon Cognito",
        "AWS Identity and Access Management (IAM)",
        "AWS Storage Gateway"
      ],
      "answer": "AWS Storage Gateway"
    },
    {
      "question": "support development and run workloads effectively, gain insights into workload operations, and continuously improve supporting processes and procedures to deliver business value",
      "options": [
        "Operational excellence",
        "AWS Glue",
        "Amazon SQS",
        "Amazon CloudFront"
      ],
      "answer": "Operational excellence"
    },
    {
      "question": "protect data, systems, and assets by using cloud technologies to improve security",
      "options": [
        "Security",
        "Amazon SNS",
        "Amazon CloudWatch",
        "AWS CodePipeline"
      ],
      "answer": "Security"
    },
    {
      "question": "includes the ability of a workload to perform its intended function correctly and consistently when expected throughout its lifecycle",
      "options": [
        "AWS Snowball",
        "Reliability",
        "Amazon Cognito",
        "AWS X-Ray"
      ],
      "answer": "Reliability"
    },
    {
      "question": "use computing resources efficiently to meet system requirements and to maintain efficiency as demand changes and technologies evolve",
      "options": [
        "AWS Snowball",
        "AWS Trusted Advisor",
        "AWS Lambda",
        "Performance efficiency"
      ],
      "answer": "Performance efficiency"
    },
    {
      "question": "includes the ability to run systems to deliver business value at the lowest price point",
      "options": [
        "Cost optimization",
        "AWS Lambda",
        "AWS Fargate",
        "Amazon Redshift"
      ],
      "answer": "Cost optimization"
    },
    {
      "question": "focuses on environmental impacts, especially energy consumption and efficiency, to inform direct actions to reduce resource usage",
      "options": [
        "Amazon CloudWatch",
        "Sustainability",
        "Amazon Cognito",
        "AWS CodeBuild"
      ],
      "answer": "Sustainability"
    },
    {
      "question": "isolated geographic area that consists of multiple Availability Zones",
      "options": [
        "Regions",
        "AWS CodeBuild",
        "Amazon DynamoDB",
        "Amazon Cognito"
      ],
      "answer": "Regions"
    },
    {
      "question": "one or more data centers within a Region",
      "options": [
        "Amazon CloudWatch",
        "AWS CodeCommit",
        "Amazon Elasticsearch Service",
        "Availability Zones"
      ],
      "answer": "Availability Zones"
    },
    {
      "question": "a worldwide network of data centers that optimizes latency and throughput to users",
      "options": [
        "Amazon CloudWatch",
        "Amazon SQS",
        "AWS Key Management Service (KMS)",
        "Edge locations"
      ],
      "answer": "Edge locations"
    },
    {
      "question": "provides low-latency access to applications by placing AWS resources close to large population and industry centers",
      "options": [
        "AWS CodePipeline",
        "AWS Local Zones",
        "AWS AppSync",
        "Amazon CloudFront"
      ],
      "answer": "AWS Local Zones"
    },
    {
      "question": "build applications that deliver ultra-low latencies to mobile devices and end users through 5G networks",
      "options": [
        "AWS Wavelength",
        "AWS Key Management Service (KMS)",
        "AWS CodePipeline",
        "AWS Fargate"
      ],
      "answer": "AWS Wavelength"
    },
    {
      "question": "connects Amazon VPCs, AWS accounts, and on-premises networks to a single gateway",
      "options": [
        "AWS Data Exchange",
        "AWS Transit Gateway",
        "AWS CodePipeline",
        "Amazon CloudFront"
      ],
      "answer": "AWS Transit Gateway"
    },
    {
      "question": "a physical or software appliance that a user owns and manages on premises",
      "options": [
        "AWS Data Exchange",
        "AWS Step Functions",
        "Customer gateway",
        "AWS Glue"
      ],
      "answer": "Customer gateway"
    },
    {
      "question": "establishes connectivity that spans Amazon VPCs spread across multiple Regions",
      "options": [
        "AWS Key Management Service (KMS)",
        "Amazon RDS",
        "Direct Connect gateway",
        "AWS CodeBuild"
      ],
      "answer": "Direct Connect gateway"
    },
    {
      "question": "an Amazon VPC component that allows communication between a user\u2019s computer and the internet",
      "options": [
        "AWS CloudFormation",
        "Internet gateway",
        "Amazon Cognito",
        "Amazon CloudFront"
      ],
      "answer": "Internet gateway"
    },
    {
      "question": "allow your instances in your private subnets to access the Internet while remaining private. Managed by AWS",
      "options": [
        "AWS Lambda",
        "NAT gateway",
        "Amazon SQS",
        "Amazon Cognito"
      ],
      "answer": "NAT gateway"
    },
    {
      "question": "allow your instances in your private subnets to access the Internet while remaining private. Managed by you.",
      "options": [
        "Amazon EC2",
        "NAT Instance",
        "Amazon Kinesis",
        "AWS AppSync"
      ],
      "answer": "NAT Instance"
    },
    {
      "question": "the gateway on the AWS side of an AWS Site-to-Site VPN connection",
      "options": [
        "Amazon Cognito",
        "AWS Fargate",
        "AWS Lambda",
        "Virtual private gateway"
      ],
      "answer": "Virtual private gateway"
    },
    {
      "question": "physical host that is fully dedicated to the user",
      "options": [
        "AWS CloudFormation",
        "AWS Key Management Service (KMS)",
        "AWS Identity and Access Management (IAM)",
        "Dedicated Hosts"
      ],
      "answer": "Dedicated Hosts"
    },
    {
      "question": "EC2 instance in a VPC dedicated to one user, no long-term commitment required, pay by the second",
      "options": [
        "Dedicated Instances",
        "Amazon Redshift",
        "Amazon SQS",
        "AWS Step Functions"
      ],
      "answer": "Dedicated Instances"
    },
    {
      "question": "commit to a 1-year or 3-year term for individual instance families in a Region, can change instance types within the family",
      "options": [
        "EC2 Savings Plan",
        "Amazon RDS",
        "Amazon CloudWatch",
        "AWS Glue"
      ],
      "answer": "EC2 Savings Plan"
    },
    {
      "question": "reserve EC2 instance capacity with no term commitment required",
      "options": [
        "On-Demand Capacity Reservations",
        "AWS Trusted Advisor",
        "Amazon Cognito",
        "Amazon EC2"
      ],
      "answer": "On-Demand Capacity Reservations"
    },
    {
      "question": "no long-term commitment required, pay by the second",
      "options": [
        "AWS CodeCommit",
        "Amazon Kinesis",
        "AWS Snowball",
        "On-Demand Instances"
      ],
      "answer": "On-Demand Instances"
    },
    {
      "question": "commit to a 1-year or 3-year term",
      "options": [
        "AWS Glue",
        "Reserved Instances",
        "AWS AppSync",
        "Amazon RDS"
      ],
      "answer": "Reserved Instances"
    },
    {
      "question": "request unused instances for flexible workloads",
      "options": [
        "AWS Trusted Advisor",
        "AWS Data Exchange",
        "AWS Fargate",
        "Spot Instances"
      ],
      "answer": "Spot Instances"
    },
    {
      "question": "lists all your accounts users and the status of their credenitals",
      "options": [
        "AWS CodePipeline",
        "AWS Key Management Service (KMS)",
        "AWS Step Functions",
        "IAM Credentials Report (account-level)"
      ],
      "answer": "IAM Credentials Report (account-level)"
    },
    {
      "question": "shows the service permissions granted to a user and when they were accessed",
      "options": [
        "AWS CodeCommit",
        "IAM Access Advisor (user-level)",
        "AWS CodeBuild",
        "AWS Identity and Access Management (IAM)"
      ],
      "answer": "IAM Access Advisor (user-level)"
    },
    {
      "question": "An identity with permissions is that assumable by anyone who needs it",
      "options": [
        "Amazon Kinesis",
        "AWS Glue",
        "IAM Role",
        "Amazon Redshift"
      ],
      "answer": "IAM Role"
    },
    {
      "question": "establishes private connectivity between VPCs and services hosted on AWS or on-premises, without exposing data to the internet.",
      "options": [
        "Amazon S3",
        "Amazon RDS",
        "AWS PrivateLInk",
        "AWS CodeCommit"
      ],
      "answer": "AWS PrivateLInk"
    },
    {
      "question": "Fully managed service to control satellite communications",
      "options": [
        "Amazon S3",
        "Amazon CloudFront",
        "AWS Step Functions",
        "AWS Ground Station"
      ],
      "answer": "AWS Ground Station"
    },
    {
      "question": "Scalable 2-way marketing communication service",
      "options": [
        "Amazon DynamoDB",
        "Amazon CloudWatch",
        "Amazon Pinpoint",
        "Amazon S3"
      ],
      "answer": "Amazon Pinpoint"
    },
    {
      "question": "Fully managed, serverless time-series database",
      "options": [
        "TimeStream",
        "Amazon DynamoDB",
        "AWS CodeBuild",
        "AWS Trusted Advisor"
      ],
      "answer": "TimeStream"
    },
    {
      "question": "managed message broker service for Apache ActiveMQ and RabbitMQ",
      "options": [
        "Amazon Cognito",
        "AWS CloudFormation",
        "Amazon SNS",
        "Amazon MQ"
      ],
      "answer": "Amazon MQ"
    },
    {
      "question": "a developer tool that provides intelligent recommendations to improve code quality",
      "options": [
        "CodeGuru",
        "Amazon S3",
        "Amazon CloudFront",
        "AWS CloudFormation"
      ],
      "answer": "CodeGuru"
    },
    {
      "question": "distributes incoming HTTP traffic across multiple targets",
      "options": [
        "Application Load Balancer",
        "Amazon CloudFront",
        "AWS Key Management Service (KMS)",
        "AWS Identity and Access Management (IAM)"
      ],
      "answer": "Application Load Balancer"
    },
    {
      "question": "High performance routing of TCP or UDP traffic across multiple targets",
      "options": [
        "Network Load Balancer",
        "Amazon CloudFront",
        "AWS Lambda",
        "Amazon CloudWatch"
      ],
      "answer": "Network Load Balancer"
    },
    {
      "question": "Route traffic to firewalls for packet inspection before forwarding",
      "options": [
        "AWS Snowball",
        "Amazon EC2",
        "AWS Key Management Service (KMS)",
        "Gateway Load Balancer"
      ],
      "answer": "Gateway Load Balancer"
    },
    {
      "question": "Transfer terabytes of data into S3 from locations with or without internet",
      "options": [
        "AWS Lambda",
        "Amazon Kinesis",
        "SnowCone",
        "AWS Fargate"
      ],
      "answer": "SnowCone"
    },
    {
      "question": "Transfer Petabytes of data into S3 without using the network. Compute (42TB) or storage (80-200TB) optimized",
      "options": [
        "SnowBall Edge",
        "AWS X-Ray",
        "Amazon RDS",
        "AWS Identity and Access Management (IAM)"
      ],
      "answer": "SnowBall Edge"
    },
    {
      "question": "Transfer 100PB at a time, up to exabytes into S3",
      "options": [
        "SnowMobile",
        "AWS CodeCommit",
        "Amazon CloudWatch",
        "Amazon S3"
      ],
      "answer": "SnowMobile"
    },
    {
      "question": "fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log",
      "options": [
        "AWS X-Ray",
        "AWS Key Management Service (KMS)",
        "QLDB (Quantum Ledger)",
        "Amazon Kinesis"
      ],
      "answer": "QLDB (Quantum Ledger)"
    },
    {
      "question": "fully managed native JSON document database compatible with MongoDB",
      "options": [
        "DynamoDB",
        "DocumentDB",
        "AWS Glue",
        "Amazon Redshift"
      ],
      "answer": "DocumentDB"
    },
    {
      "question": "Define cloud archtecture using a familiar language like Python or Javascript",
      "options": [
        "AWS Identity and Access Management (IAM)",
        "CDK (cloud development kit)",
        "Amazon EC2",
        "Amazon SNS"
      ],
      "answer": "CDK (cloud development kit)"
    },
    {
      "question": "Start a secure shell on EC2 or on-premises servers without SSH",
      "options": [
        "AWS Glue",
        "AWS Step Functions",
        "Amazon CloudWatch",
        "SSM Session Manager"
      ],
      "answer": "SSM Session Manager"
    },
    {
      "question": "Route 53 policy used to route traffic to multiple resources in proportions that you specify",
      "options": [
        "AWS Identity and Access Management (IAM)",
        "Weighted Routing Policy",
        "Amazon SQS",
        "AWS Key Management Service (KMS)"
      ],
      "answer": "Weighted Routing Policy"
    },
    {
      "question": "Route 53 policy with one endpoint and no health checks",
      "options": [
        "AWS Trusted Advisor",
        "AWS Glue",
        "AWS Identity and Access Management (IAM)",
        "Simple Routing Policy"
      ],
      "answer": "Simple Routing Policy"
    },
    {
      "question": "Route 53 policy that directs traffic based on how close they are to the endpoint",
      "options": [
        "AWS Trusted Advisor",
        "Latency Routing Policy",
        "AWS CodeCommit",
        "AWS CodeBuild"
      ],
      "answer": "Latency Routing Policy"
    },
    {
      "question": "Route 53 policy used for disaster recovery",
      "options": [
        "AWS CodeBuild",
        "AWS CodeCommit",
        "Failover Routing Policy",
        "Amazon SQS"
      ],
      "answer": "Failover Routing Policy"
    },
    {
      "question": "allows you to centrally manage all users and roles permissions in your AWS Organization",
      "options": [
        "Amazon SQS",
        "AWS Trusted Advisor",
        "AWS Glue",
        "Service Control Policies (SCP)"
      ],
      "answer": "Service Control Policies (SCP)"
    },
    {
      "question": "most cost-effective option to have 24x7 phone, email, and chat support",
      "options": [
        "Basic Support Plan",
        "Business Support Plan",
        "Enterprise Support Plan",
        "Developer Support Plan"
      ],
      "answer": "Business Support Plan"
    },
    {
      "question": "Which AWS support plan guarantees a response time of under 15 minutes for business-critical system down situations, and includes access to a Technical Account Manager and Concierge Support Team?",
      "options": [
        "Business Support Plan",
        "Enterprise Support Plan",
        "Developer Support Plan",
        "Basic Support Plan"
      ],
      "answer": "Enterprise Support Plan"
    },
    {
      "question": "Which AWS service provides configuration management through managed instances of Chef and Puppet, and allows automation of infrastructure tasks?",
      "options": [
        "AWS Systems Manager",
        "Amazon EC2 Systems Manager",
        "OpsWorks",
        "AWS Config"
      ],
      "answer": "OpsWorks"
    },
    {
      "question": "Which AWS service provides a visual canvas to design and build serverless applications with a drag-and-drop interface?",
      "options": [
        "AWS Step Functions",
        "AWS Application Composer",
        "AWS Amplify Studio",
        "AWS CloudFormation Designer"
      ],
      "answer": "AWS Application Composer"
    },
    {
      "question": "Which AWS service is designed to move large amounts of data from on-premises to AWS, with incremental replication tasks?",
      "options": [
        "AWS Snowball Edge",
        "AWS DataSync",
        "Amazon FSx for Windows File Server",
        "AWS Transfer Family"
      ],
      "answer": "AWS DataSync"
    },
    {
      "question": "Which AWS services support VPC Endpoint Gateway for a private connection from a VPC?",
      "options": [
        "Amazon S3 and DynamoDB (other services use Interface Endpoints)",
        "AWS Lambda and EC2",
        "AWS Fargate and CodeCommit",
        "Amazon RDS and SQS"
      ],
      "answer": "Amazon S3 and DynamoDB (other services use Interface Endpoints)"
    },
    {
      "question": "What is the maximum percentage of savings you can achieve by reserving an instance?",
      "options": [
        "72%",
        "Up to 60%",
        "75%",
        "Up to 80%"
      ],
      "answer": "72%"
    },
    {
      "question": "Which of the following services are encrypted by default?",
      "options": [
        "Amazon S3 and AWS Storage Gateway",
        "Amazon RDS and Amazon DynamoDB",
        "Amazon S3 and AWS Secrets Manager",
        "AWS CodeCommit and AWS Lambda"
      ],
      "answer": "Amazon S3 and AWS Storage Gateway"
    },
    {
      "question": "Which Amazon Simple Storage Service (Amazon S3) storage class offers the lowest availability?",
      "options": [
        "Amazon S3 Glacier Deep Archive",
        "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "Amazon S3 Intelligent-Tiering",
        "Amazon S3 Standard-IA"
      ],
      "answer": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)"
    },
    {
      "question": "What are the components of an AWS Site-to-Site VPN?",
      "options": [
        "AWS Direct Connect and Virtual Private Gateway",
        "Virtual Private Gateway (VPG)/Transit Gateway and Customer Gateway",
        "Amazon VPC Peering and AWS Transit Gateway",
        "Amazon CloudFront and Site-to-Site Tunnel"
      ],
      "answer": "Virtual Private Gateway (VPG)/Transit Gateway and Customer Gateway"
    },
    {
      "question": "Which service provides built-in human review workflows for common machine learning use cases, such as content moderation and text extraction from documents?",
      "options": [
        "Amazon Augmented AI (A2I)",
        "AWS Lambda",
        "Amazon Textract",
        "Amazon Rekognition"
      ],
      "answer": "Amazon Augmented AI (A2I)"
    },    
    {
      "question": "When do you pay for data transferred between S3 and an EC2 instance?",
      "options": [
        "If it's in a different region",
        "When using S3 Transfer Acceleration",
        "When the EC2 instance uses a public IP",
        "If S3 is accessed through CloudFront"
      ],
      "answer": "If it's in a different region"
    },
    {
      "question": "Which AWS service can you use to choose an optimal Savings Plan?",
      "options": [
        "Cost Explorer",
        "AWS Trusted Advisor",
        "AWS Budgets",
        "AWS Cost and Usage Report"
      ],
      "answer": "Cost Explorer"
    },
    {
      "question": "What are the two types of AWS Savings Plans?",
      "options": [
        "Compute Savings Plan and EC2 Instance Savings Plan",
        "Compute Savings Plan and Lambda Savings Plan",
        "EC2 Instance Savings Plan and S3 Savings Plan",
        "Reserved Instance Savings Plan and Spot Savings Plan"
      ],
      "answer": "Compute Savings Plan and EC2 Instance Savings Plan"
    },    
    {
      "question": "automated reference deployments for key workloads",
      "options": [
        "AWS Partner Solutions(formerly Quick Starts)",
        "Amazon SageMaker",
        "AWS Trusted Advisor",
        "AWS Step Functions"
      ],
      "answer": "AWS Partner Solutions(formerly Quick Starts)"
    },
    {
      "question": "graphical user interface you can use to manage your AWS Snowball devices",
      "options": [
        "AWS OpsHub",
        "AWS CodePipeline",
        "AWS Data Exchange",
        "AWS Snowball"
      ],
      "answer": "AWS OpsHub"
    },
    {
      "question": "Which AWS service provides reference architecture diagrams, vetted architecture solutions, Well-Architected best practices, patterns, icons, and more?",
      "options": [
        "AWS Well-Architected Tool",
        "AWS CloudFormation Registry",
        "AWS Architecture Center",
        "AWS Solutions Constructs"
      ],
      "answer": "AWS Architecture Center"
    },
    {
      "question": "Which data sources are used by Amazon Detective to analyze events and identify potential security issues?",
      "options": [
        "Amazon RDS",
        "AWS X-Ray",
        "AWS CodeCommit",
        "AWS CloudTrail logs/Amazon VPC Flow Logs/Amazon GuardDuty findings"
      ],
      "answer": "AWS CloudTrail logs/Amazon VPC Flow Logs/Amazon GuardDuty findings"
    },
    {
      "question": "simplifies the building, testing, and deployment of Virtual Machine and container images for use on AWS or on-premises.",
      "options": [
        "Amazon SageMaker",
        "Amazon EC2",
        "Amazon RDS",
        "EC2 Image Builder"
      ],
      "answer": "EC2 Image Builder"
    }
  ];

  export default quizData;
