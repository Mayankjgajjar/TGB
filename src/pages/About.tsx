import React, { lazy, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import {
  CompanyIntro,
  WhoWeAreSplit,
  WhyTrustGrid,
  LeadershipGrid
} from '../components/sections/Identity';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import { aboutContent, ICON_MAP } from '../content/about';
import identityStyles from '../components/sections/Identity.module.css';
import aboutStyles from './About.module.css';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const Industries = lazy(() => import('../components/sections/Industries'));
const Process = lazy(() => import('../components/sections/Process'));

const SectionFallback = () => <div style={{ minHeight: '400px' }} aria-hidden="true" />;

export const About: React.FC = () => {
  // Ensure page starts at top on transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={identityStyles.identityWrapper}
    >
      {/* 
        Single outer layout section matching the approved visual standards of the signage factory.
        All inner sections are composed as div landmarks, ensuring perfect alignment and gap spacing.
      */}
      <section className={identityStyles.aboutSection} id="about-us">
        <div className={identityStyles.inner} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-96)' }}>
          
          {/* 1. Company Introduction */}
          <CompanyIntro
            breadcrumbs={aboutContent.introduction.breadcrumbs}
            eyebrow={aboutContent.introduction.eyebrow}
            title={aboutContent.introduction.title}
            subtitle={aboutContent.introduction.subtitle}
          />

          {/* 2. Mission & Vision */}
          <div id="mission-vision">
            <div className={identityStyles.headerBlock}>
              <SectionEyebrow>{aboutContent.missionVision.header.eyebrow}</SectionEyebrow>
              <h2 className={identityStyles.mainTitle}>{aboutContent.missionVision.header.title}</h2>
              <p className={identityStyles.subtitle}>{aboutContent.missionVision.header.subtitle}</p>
            </div>
            
            <div className={aboutStyles.gridCols2}>
              {/* Mission Card */}
              <div className={identityStyles.featureCard}>
                <div className={identityStyles.featureIconWrapper}>
                  <Target className={identityStyles.featureIcon} strokeWidth={1.25} />
                </div>
                <div className={identityStyles.featureCategory}>MISSION</div>
                <h3 className={identityStyles.featureTitle}>{aboutContent.missionVision.mission.title}</h3>
                <p className={identityStyles.featureDescription} style={{ marginBottom: '0px' }}>
                  {aboutContent.missionVision.mission.description}
                </p>
              </div>

              {/* Vision Card */}
              <div className={identityStyles.featureCard}>
                <div className={identityStyles.featureIconWrapper}>
                  <Eye className={identityStyles.featureIcon} strokeWidth={1.25} />
                </div>
                <div className={identityStyles.featureCategory}>VISION</div>
                <h3 className={identityStyles.featureTitle}>{aboutContent.missionVision.vision.title}</h3>
                <p className={identityStyles.featureDescription} style={{ marginBottom: '0px' }}>
                  {aboutContent.missionVision.vision.description}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Company Journey */}
          <div id="journey">
            <div className={identityStyles.headerBlock}>
              <SectionEyebrow>{aboutContent.journey.header.eyebrow}</SectionEyebrow>
              <h2 className={identityStyles.mainTitle}>{aboutContent.journey.header.title}</h2>
              <p className={identityStyles.subtitle}>{aboutContent.journey.header.subtitle}</p>
            </div>
            <div className={aboutStyles.narrativeBlock}>
              {aboutContent.journey.paragraphs.map((p, idx) => (
                <p key={idx} className={aboutStyles.narrativeText}>{p}</p>
              ))}
            </div>
          </div>

          {/* 4. Who We Are */}
          <div id="who-we-are">
            <WhoWeAreSplit
              intro={{
                eyebrowWho: aboutContent.whoWeAre.header.eyebrow,
                headingWho: aboutContent.whoWeAre.header.title,
                paragraph1: aboutContent.whoWeAre.description,
                paragraph2: "",
                paragraph3: "",
                image: aboutContent.whoWeAre.image,
                metrics: []
              }}
              showMetrics={false}
            />
          </div>

          {/* 5. Company Statistics */}
          <div id="statistics">
            <div className={identityStyles.statsRowCard}>
              {aboutContent.statistics.metrics.map((metric, i) => (
                <div key={i} className={identityStyles.statCol}>
                  <span className={identityStyles.statValue}>{metric.value}</span>
                  <span className={identityStyles.statLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Core Values */}
          <div id="core-values">
            <div className={identityStyles.headerBlock}>
              <SectionEyebrow>{aboutContent.coreValues.header.eyebrow}</SectionEyebrow>
              <h2 className={identityStyles.mainTitle}>{aboutContent.coreValues.header.title}</h2>
              <p className={identityStyles.subtitle}>{aboutContent.coreValues.header.subtitle}</p>
            </div>
            
            <div className={aboutStyles.gridCols3}>
              {aboutContent.coreValues.items.map((value, idx) => {
                const Icon = ICON_MAP[value.icon || 'ShieldCheck'] || ShieldCheck;
                return (
                  <div key={idx} className={identityStyles.featureCard}>
                    <div className={identityStyles.featureIconWrapper}>
                      <Icon className={identityStyles.featureIcon} strokeWidth={1.25} />
                    </div>
                    <div className={identityStyles.featureCategory}>VALUE {idx + 1}</div>
                    <h3 className={identityStyles.featureTitle}>{value.title}</h3>
                    <p className={identityStyles.featureDescription} style={{ marginBottom: '0px' }}>
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 7. Why Businesses Trust TGB */}
          <WhyTrustGrid
            title={aboutContent.trust.header.title}
            subtitle={aboutContent.trust.header.subtitle}
            standards={aboutContent.trust.items}
            asDiv={true}
          />

          {/* 8. Leadership Team */}
          <LeadershipGrid
            title={aboutContent.leadership.header.title}
            subtitle={aboutContent.leadership.header.subtitle}
            leaders={aboutContent.leadership.leaders}
            asDiv={true}
          />

          {/* 9. Industries We Serve */}
          <Suspense fallback={<SectionFallback />}>
            <Industries
              title={aboutContent.industries.header.title}
              subtitle={aboutContent.industries.header.subtitle}
              items={aboutContent.industries.items}
              asDiv={true}
            />
          </Suspense>

          {/* 10. Manufacturing Process */}
          <Suspense fallback={<SectionFallback />}>
            <Process
              title={aboutContent.process.header.title}
              subtitle={aboutContent.process.header.subtitle}
              introParagraph={aboutContent.process.introParagraph}
              stages={aboutContent.process.stages}
              asDiv={true}
            />
          </Suspense>

          {/* 11. Quality Commitment */}
          <div id="quality-commitment">
            <div className={identityStyles.headerBlock}>
              <SectionEyebrow>{aboutContent.qualityCommitment.header.eyebrow}</SectionEyebrow>
              <h2 className={identityStyles.mainTitle}>{aboutContent.qualityCommitment.header.title}</h2>
              <p className={identityStyles.subtitle}>{aboutContent.qualityCommitment.header.subtitle}</p>
            </div>
            
            <div className={aboutStyles.gridCols3}>
              {aboutContent.qualityCommitment.items.map((item, idx) => (
                <div key={idx} className={identityStyles.featureCard}>
                  <div className={identityStyles.featureIconWrapper}>
                    <ShieldCheck className={identityStyles.featureIcon} strokeWidth={1.25} />
                  </div>
                  <div className={identityStyles.featureCategory}>STANDARD {idx + 1}</div>
                  <h3 className={identityStyles.featureTitle}>{item.title}</h3>
                  <p className={identityStyles.featureDescription} style={{ marginBottom: '0px' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 12. Our Commitment */}
          <div id="our-commitment">
            <div className={identityStyles.headerBlock}>
              <SectionEyebrow>{aboutContent.ourCommitment.header.eyebrow}</SectionEyebrow>
              <h2 className={identityStyles.mainTitle}>{aboutContent.ourCommitment.header.title}</h2>
              <p className={identityStyles.subtitle}>{aboutContent.ourCommitment.header.subtitle}</p>
            </div>
            <div className={aboutStyles.narrativeBlock}>
              {aboutContent.ourCommitment.paragraphs.map((p, idx) => (
                <p key={idx} className={aboutStyles.narrativeText}>{p}</p>
              ))}
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default About;
