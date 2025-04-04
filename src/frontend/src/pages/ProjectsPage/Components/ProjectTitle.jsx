import { Card, CardContent } from "@/components/Projectutils/card";
import { Badge } from "@/components/Projectutils/badge";
import { Users, Calendar, Tag, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

const ProjectHeroSection = ({ projectData }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const statusColors = {
    Completed: "bg-emerald-500",
    "In Progress": "bg-blue-500",
    Planned: "bg-amber-500",
  };

  console.log(projectData, "projectData");
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-gray-900 dark:bg-gray-800"
      style={{ zIndex: 0 }} // Removed top padding, retained z-index
    >
      {/* Background with Image and Gradient */}
      <div className="absolute inset-0">
        <img
          src="/sample-image.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent dark:bg-gradient-to-r dark:from-black/90 dark:via-black/80 dark:to-transparent" />
      </div>

      {/* Main Content Container */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-white"
        style={{ zIndex: 10 }} // Retained z-index for content layering
      >
        <div className="w-full lg:w-2/3 space-y-12">
          {/* Header Section */}
          <motion.div
            className="space-y-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="secondary"
                className="bg-blue-500/20 text-white hover:bg-blue-500/30"
              >
                {projectData?.progress} % completed
              </Badge>
              <Badge variant="secondary" className={` text-white`}>
                {/* {projectData?.progress} */}
              </Badge>
            </div>

            <h1 className="text-6xl font-bold text-white leading-tight">
              {projectData?.headline}
            </h1>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              {projectData?.subtitle}
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <Card className="bg-white/10 backdrop-blur-md border-0 dark:bg-[#697565]/10">
              <CardContent className="p-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-300" />
                  <span className="text-gray-200">
                    {new Date(projectData?.startDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        year: "numeric",
                      },
                    )}{" "}
                    -{" "}
                    {new Date(projectData?.endDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Tag className="w-5 h-5 text-blue-300" />
                  <span className="text-gray-200">{projectData?.part}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Users className="w-5 h-5 text-blue-300" />
                    <span className="text-gray-200 font-medium">
                      Contributors
                    </span>
                  </div>
                  <div className="ml-8 space-y-2">
                    {projectData?.teamMembers?.map((contributor, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {/* <img
                          src={`https://api.dicebear.com/7.x/identicon/svg?seed=${contributor.name}`}
                          alt={contributor.name}
                          className="w-6 h-6 rounded-full bg-gray-700"
                        />
                        <a
                          href={contributor.profileUrl}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {contributor}
                        </a> */}
                        <img
                          src={`https://api.dicebear.com/7.x/identicon/svg?seed=${contributor.name}`}
                          alt={contributor}
                          className="w-6 h-6 rounded-full bg-gray-700"
                        />
                        <p>{contributor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Total Downloads",
                value: `${projectData.statistics.dailyActivity}K+`,
                icon: <ExternalLink className="w-5 h-5 text-blue-300" />,
              },
              {
                label: "User Rating",
                value: projectData.statistics.userRating,
                icon: <Star className="w-5 h-5 text-yellow-300" />,
              },
              {
                label: "Active Users",
                value: `${projectData.statistics.dailyUsers}K+`,
                icon: <Users className="w-5 h-5 text-green-300" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg dark:bg-[#697565]/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  {stat.icon}
                  <p className="text-gray-300">{stat.label}</p>
                </div>
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHeroSection;
