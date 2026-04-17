// src/lib/projects.ts

import { Project } from "@/types/project"

export const projects: Project[] = [
    {
  slug: "voice-ticketing-system",
  title: "Voice-Driven Service Ticketing System",
  subtitle: "AI-powered workflow automation for service operations",
  tags: ["LLM", "Voice Interface", "RAG", "Automation"],
  sections: [
    {
      title: "Overview",
      content:
        "Designed and built a voice-driven service ticketing system with Heads Up Display to modernize service workflows. The system enables technicians to retrieve, update, and complete service tickets using natural language, with possible integration directly to accounting systems like QuickBooks."
    },
    {
      title: "Problem",
      content:
        "Marine service departments often rely on paper-based ticketing systems that are inefficient, error-prone, and disconnected from digital tools. This creates friction in tracking work, managing parts, and synchronizing with accounting systems, leading to delays and data inconsistencies."
    },
    {
      title: "Data",
      content:
        "The system interacts with structured service ticket data, along with unstructured inputs from voice commands. To handle ambiguity in user queries (e.g., similar boat names or incomplete references), vector embeddings are generated and stored for similarity-based retrieval."
    },
    {
      title: "Approach",
      content:
        "Built a voice-first interaction model where user input is transcribed and processed by an LLM. The system interprets intent and queries ticket data, using vector similarity search (ChromaDB) to resolve ambiguous matches. Once a ticket is retrieved, users can iteratively modify it via natural language. The architecture leverages LangGraph for orchestration, OpenAI for language processing, SQLite for short-term state management, and is designed to scale to a cloud environment using AWS Lambda."
    },
    {
      title: "Results",
      content:
        "Successfully demonstrated end-to-end workflow: retrieving tickets, resolving ambiguous queries, updating line items. The system reduced manual lookup steps and enabled hands-free interaction, improving efficiency in service operations."
    },
    {
      title: "Impact",
      content:
        "This project highlights the potential for AI-driven interfaces to modernize legacy workflows in traditionally analog industries. It demonstrates practical application of LLMs in operational settings, particularly where voice interaction and real-time data integration provide tangible productivity gains."
    },
    {
      title: "Artifacts",
      content:
        "Includes full-stack implementation covering voice interface, LLM orchestration, and backend integration. Demonstrates use of prompt engineering, retrieval strategies, and system design for real-world deployment scenarios."
    }
  ],
  github: "#",
  demo: "#"
},
    {
  slug: "knn-wine-recommender",
  title: "KNN-Based Wine Recommendation System",
  subtitle: "Similarity-driven recommendations using engineered wine profiles",
  tags: ["Machine Learning", "KNN", "Feature Engineering", "Scikit-learn"],
  sections: [
    {
      title: "Overview",
      content:
        "Built a similarity-based recommendation system to identify wines with comparable profiles using K-Nearest Neighbors (KNN). Combined feature engineering and distance-based modeling to surface meaningful relationships between wines beyond basic attributes."
    },
    {
      title: "Problem",
      content:
        "Wine datasets often contain many correlated chemical features, making it difficult to identify meaningful similarity between wines using raw values alone. The goal was to build a system that could recommend wines with comparable profiles in a way that aligns with underlying chemical balance rather than isolated features."
    },
    {
      title: "Data",
      content:
        "Used the wineQualityReds dataset (initially 1,599 rows, reduced to 1,359 after cleaning). Preprocessing included removing duplicates, addressing outliers, and consolidating highly imbalanced quality classes. Feature scaling was applied using MinMaxScaler to ensure consistent distance calculations across variables."
    },
    {
      title: "Approach",
      content:
        "Implemented a KNN-based recommender using cosine similarity to measure distance between wines in feature space. Used 5 nearest neighbors to generate recommendations. A key contribution was feature engineering: specifically, creating a feature representing the difference between acid z-score and alcohol z-score, which captured balance between acidity and alcohol content. This feature proved highly informative and also performed strongly in a separate Random Forest classification task. The system retrieves wines most similar to a selected input wine based on overall feature similarity."
    },
    {
      title: "Results",
      content:
        "Evaluated recommendation quality through comparative visual analysis. Generated histograms comparing feature distributions of recommended wines against baseline groups (e.g., all wines of a given quality level). Results showed that recommended wines clustered more tightly around the input wine’s profile, indicating that the model successfully captured meaningful similarity relationships. Visual comparisons confirmed that recommendations aligned more closely with the target wine than with the broader dataset."
    },
    {
      title: "Impact",
      content:
        "This project demonstrates how feature engineering can significantly enhance similarity-based models, especially in domains where relationships are driven by balance between variables rather than single features. It highlights practical considerations in building recommendation systems, including scaling, distance metrics, and validation of similarity beyond numeric outputs."
    },
    {
      title: "Artifacts",
      content:
        "Includes data preprocessing pipeline, feature engineering experiments, KNN implementation using scikit-learn, and visualization outputs comparing recommendation sets against baseline distributions."
    }
  ],
  github: "#",
  demo: "#"
},
    {
  slug: "lionfish-probability-map",
  title: "Lionfish Habitat Probability Model",
  subtitle: "Bayesian modeling of invasive species presence across Caribbean benthic habitats",
  tags: ["Bayesian Modeling", "Geospatial Analysis", "Clustering", "Statistical Modeling", "Python"],
  sections: [
    {
      title: "Overview",
      content:
        "Developed a probabilistic model to estimate the likelihood of lionfish presence across benthic habitats in Puerto Rico and the US Virgin Islands. Combined ecological sighting data with habitat classification and statistical modeling to infer species distribution under sparse and uneven observational data."
    },
    {
      title: "Problem",
      content:
        "Lionfish are an invasive species with significant ecological impact, but observational data is sparse and geographically uneven. Directly estimating species distribution from sightings alone leads to biased conclusions. The goal was to infer habitat-level probabilities of presence by incorporating environmental structure and correcting for spatial bias."
    },
    {
      title: "Data",
      content:
        "Used USGS lionfish sighting data containing latitude, longitude, date, and drainage basin. Integrated this with benthic habitat maps containing 19,665 distinct habitat combinations defined by zone, descriptor, type, and classification. The high dimensionality and fragmentation of habitat categories required reduction before modeling."
    },
    {
      title: "Approach",
      content:
        "Reduced habitat dimensionality using KMeans clustering, with the number of clusters selected via elbow plot analysis, resulting in 21 representative habitat groups. Joined sighting data to habitat clusters using spatial coordinates. Estimated conditional probability of lionfish presence given habitat using a Bayesian framework. Adjusted probabilities by total habitat area to correct for sampling bias, ensuring that large-area habitats did not artificially appear more probable due to coverage alone."
    },
    {
      title: "Results",
      content:
        "The model produced a habitat-level probability distribution of lionfish presence, highlighting distinct high-risk environments. Spatial visualization of the results showed coherent clustering of high-probability regions. Qualitative validation through field observation confirmed alignment between predicted high-probability zones and actual lionfish presence."
    },
    {
      title: "Impact",
      content:
        "This work demonstrates how probabilistic modeling can be applied to ecological systems with incomplete data, combining clustering, Bayesian inference, and spatial normalization to produce meaningful predictions. The approach is extensible to other invasive species and environmental risk modeling scenarios where observations are sparse and biased."
    },
    {
      title: "Artifacts",
      content:
        "Includes data preprocessing pipeline, habitat clustering analysis with elbow optimization, Bayesian probability estimation, spatial normalization by habitat area, and geospatial visualization outputs."
    },
      {
  title: "Limitations & Bias",
  content:
    "The model is subject to observational bias, as lionfish sightings are more likely to occur in areas with higher human activity (e.g., popular dive or swim locations). This introduces a sampling bias where absence of sightings does not necessarily indicate absence of lionfish, particularly in less-visited habitats such as deep or low-access regions (e.g., mud habitats). While habitat-area normalization helps correct for spatial imbalance, it does not fully account for uneven sampling effort. A more robust approach would incorporate effort-based weighting or external proxies for human activity (e.g., dive site density) to better separate ecological signal from observation bias."
}
  ],
  github: "#",
  demo: "#"
},
    {
  slug: "closed-domain-qa-bot",
  title: "Closed-Domain Question Answering System",
  subtitle: "From lexical similarity to semantic retrieval with measurable accuracy gains",
  tags: ["NLP", "Embeddings", "Similarity Search", "Machine Learning"],
  sections: [
    {
      title: "Overview",
      content:
        "Built a closed-domain question answering system to return relevant answers from a predefined dataset. Iteratively improved the system by moving from lexical similarity methods to semantic embeddings, significantly increasing accuracy and response quality."
    },
    {
      title: "Problem",
      content:
        "Traditional keyword-based approaches struggle to capture semantic meaning, leading to poor matches when user queries are phrased differently from stored answers. The goal was to improve answer relevance while maintaining a lightweight, efficient system."
    },
    {
      title: "Data Preparation",
      content:
        "Preprocessed text data by removing punctuation and numbers, converting to lowercase, removing stopwords, and applying tokenization and lemmatization. This ensured consistent input for similarity comparisons and reduced noise in the dataset."
    },
    {
      title: "Phase 1: Lexical Similarity",
      content:
        "Implemented a baseline system using Jaccard similarity to compare user queries against stored questions and answers. Returned the top 3 most similar matches and generated responses when similarity thresholds were met. This approach achieved approximately 85% accuracy but was limited in handling semantic variation."
    },
    {
      title: "Phase 2: Semantic Retrieval",
      content:
        "Improved the system by introducing 256-dimensional semantic embeddings and cosine similarity. This allowed the model to capture meaning rather than exact word overlap, significantly improving performance on paraphrased queries. Responses were generated when similarity thresholds were met."
    },
    {
      title: "Results",
      content:
        "The transition from lexical similarity to semantic embeddings improved accuracy from approximately 85% to 95%. The system demonstrated stronger performance on varied phrasing and more robust matching across semantically similar queries."
    },
    {
      title: "Impact",
      content:
        "This project highlights the practical advantages of semantic retrieval over traditional keyword-based approaches. It demonstrates how relatively simple architectural changes—moving from token overlap to embeddings—can significantly improve system performance in real-world NLP applications."
    }
  ],
  github: "#",
  demo: "#"
},
    {
  slug: "image-to-listing-automation",
  title: "Image-to-Listing Automation System",
  subtitle: "Multimodal pipeline for extracting product data and generating resale listings",
  tags: ["LLM", "Multimodal", "OCR", "Entity Resolution", "Automation"],
  sections: [
    {
      title: "Overview",
      content:
        "Built a multimodal pipeline that converts images of packaged products into structured, marketplace-ready listings. The system extracts identifying information from images, resolves product details through external lookup, and generates clean listing descriptions. A human-in-the-loop ensures accuracy before publishing, making the system practical for real resale workflows."
    },
    {
      title: "Problem",
      content:
        "Reselling items from bulk inventory often requires identifying individual products with limited or inconsistent documentation. Determining compatibility, specifications, or use cases typically involves manual research using part numbers or manufacturer data. This process is time-consuming and limits the ability to efficiently monetize long-tail inventory."
    },
    {
      title: "System Design",
      content:
        "The system is structured as a modular pipeline: image ingestion → text extraction → entity normalization → external lookup → listing generation → human review. Each stage transforms unstructured input into progressively more structured data, allowing components to be improved independently while maintaining overall system reliability."
    },
    {
      title: "Image and Text Extraction",
      content:
        "Images of packaged products are processed using OCR to extract key identifiers such as model numbers and manufacturer information. Preprocessing techniques handle noise such as inconsistent lighting, angles, and label formats. The extraction step prioritizes capturing all potential identifiers, with validation deferred to later stages."
    },
    {
      title: "Entity Resolution and Lookup",
      content:
        "Extracted identifiers are normalized and used to query external sources to determine product specifications and applications. This step operates as an entity resolution problem, where imperfect or partial inputs must map to real-world products. Candidate matches are ranked to handle ambiguity rather than forcing a single deterministic result."
    },
    {
      title: "Listing Generation",
      content:
        "An LLM generates concise, structured listing descriptions using the resolved product data. Prompts are designed to constrain tone and format, ensuring consistency and reducing hallucination risk. The model operates on structured inputs rather than raw text, improving reliability and alignment with marketplace requirements."
    },
    {
      title: "Human-in-the-Loop Review",
      content:
        "Before publication, a user reviews the generated listing and underlying data. This step ensures accuracy in cases of ambiguity or incomplete information. The system is designed to accelerate the workflow by producing a strong first draft while allowing a subject matter expert to validate or correct results."
    },
    {
      title: "Failure Modes",
      content:
        "Key challenges include poor image quality, incomplete identifiers, and inconsistent external data sources. Ambiguity in product matching can lead to multiple plausible results. These risks are mitigated through candidate ranking, conservative generation strategies, and mandatory human validation before publishing."
    },
    {
      title: "Impact",
      content:
        "The system reduces the time required to research and list individual items, enabling more efficient processing of bulk inventory. By transforming unstructured images into structured, sellable data, it demonstrates how multimodal AI systems can support real-world, revenue-generating workflows."
    },
    {
      title: "Next Steps",
      content:
        "Future improvements include integrating higher-quality data sources, adding confidence scoring across pipeline stages, and incorporating feedback loops from human corrections to improve accuracy over time. Expanding batch processing capabilities would further increase throughput and usability."
    }
  ]
}
]