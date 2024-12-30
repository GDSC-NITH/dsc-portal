import MainLayout from "@/Layout/MainLayout";
import { useParams } from "react-router-dom";
import React from "react";
import ExampleProjectHeroSection from "./projectDetailsComponents/projectTitle";
import TechnicalFeaturesSection from "./projectDetailsComponents/projectDescription";
import TeamSection from './projectDetailsComponents/projectteammeber';
import Carousel from "./projectDetailsComponents/projectCarousel";
function ProjectDetails() {
  const { slug } = useParams();

  return <MainLayout>
    <div className="App">
      <ExampleProjectHeroSection />
      <TechnicalFeaturesSection />
      <Carousel />
      <TeamSection />
    </div>
    
  </MainLayout>
}

export default ProjectDetails;