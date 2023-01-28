import React from 'react';

import { useTrail, animated } from '@react-spring/web';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import HeroMain from './img/hero_main.svg';

import JuejinIcon from '@site/static/svg/juejin.svg';
import { Icon } from '@iconify/react';

import styles from './styles.module.scss';

import clsx from 'clsx';
import HomepageInfo from '@site/src/components/HomepageInfo';
import DayAndNight from '@site/src/components/DayAndNight';


/* 桌面下滑箭头 */
function ArrowDownBtn(): JSX.Element {
  return (
    <span className={styles.arrowDownBtnWrapper}>
      <svg
        className={styles.arrowDownBtn}
        aria-hidden="true"
        viewBox="-75.52 -43.52 599.04 599.04"
        fill="currentColor"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight+40,
            behavior: "smooth"
          })
        }}>
        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
      </svg>
    </span>
  )
}


function Hero() {
  const trails = useTrail(4, {
    // 首页文字过度动作
    from: { opacity: 0, transform: 'translate3d(0px, 5em, 50px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3.5,
      tension: 300,
      friction: 25,
    },
  });

  const {siteConfig} = useDocusaurusContext();
  const { themeConfig } = siteConfig;
  const socials = themeConfig.socials as {
    github: string;
    // twitter: string;
    // juejin: string;
    // csdn: string;
    qq: string;
    wechat: string;
    // cloudmusic: string;
    // zhihu: string;
  };

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          {/* <Translate id="homepage.hero.greet">加减 の </Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">Tiny Home</Translate>
          </span> */}
        </animated.div>
        <animated.p style={trails[1]}>
          {/* <Translate id="homepage.hero.text">
            {`世界继续热闹，愿你不变模样，勇敢且自由 😉`}
          </Translate>
        <br />
        <br /> */}
            {/* {`这里是加减的Blog 😉`}<br /><br /> */}

      <div className={styles['header-content-inner']}>
        <div className={clsx('hero__title', styles['header-title'])}>
          <p>
            {`Shake's `}
          </p>
       </div>
         <div className={styles['header-right']}>
           <div className={clsx('hero__subtitle', styles['header-describe'])}>
             <p>
              <em>{`BLOG`}</em>
             </p>
           </div>
         </div>
      </div>
      
      <p>
        {`这里是加减的 Blog 😉`}
      </p>

          {/* <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="/docs/skill">
                  <Translate id="hompage.hero.note">技术笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/project">
                  <Translate id="hompage.hero.project">实战项目</Translate>
                </Link>
              ),
              link: (
                <Link to="/website">
                  <Translate id="hompage.hero.link">网址导航</Translate>
                </Link>
              ),
              idea: (
                <Link to="/tags/随笔">
                  <Translate id="hompage.hero.idea">想法感悟</Translate>
                </Link>
              ),
            }}
          >
            {`你可以随处逛逛，查看{note}、{project}、{link}、以及我的{idea}。`}
          </Translate> */}
          </animated.p>

          {/* 社交图标 */}
          {/* <SocialLinks style={trails[2]} /> */}
          <animated.div style={trails[3]}>
            {/* about me */}
            {/* <a className={styles.intro} href={'./about'}>
              <Translate id="hompage.hero.introduce">About Me</Translate>
            </a> */}
           </animated.div>

            <div>
              <a className="dropdown dropdown--hoverable">
                  <a href={socials.github} target="_blank">
                    <button>
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                          </svg>
                        </div>
                      </div>
                      &nbsp;
                      <span>{`Github`}</span>
                    </button>
                  </a>
                </a>&nbsp;&nbsp;&nbsp;

              <a className="dropdown dropdown--hoverable">
                <a href={socials.wechat} target="_blank">
                  <button>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                      </div>
                    </div>
                    &nbsp;
                    <span>{`WeChat`}</span>
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/wechat.jpg'/>
              </a>&nbsp;&nbsp;&nbsp;

              <a className="dropdown dropdown--hoverable">
                <a href={socials.qq} target="_blank">
                  <button>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                      </div>
                    </div>
                    &nbsp;
                    <span>{`QQ`}</span>
                    &nbsp;
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/qq.jpg'/>
              </a>
            </div><br/>

            <div>
              {/* <HomepageInfo /> */}
              <DayAndNight />
            </div>
            {/* <SocialLinks style={trails[2]} /> */} {/* 社交图标 */}
          {/* </animated.div> */}
        </div>
        <div className={styles.bloghome__image}>
          <ArrowDownBtn />
          <HeroMain />
        </div>
      </animated.div>
  );
}

export function SocialLinks({ ...prop }) {
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig } = siteConfig;
  const socials = themeConfig.socials as {
    github: string;
    // twitter: string;
    // juejin: string;
    // csdn: string;
    qq: string;
    wechat: string;
    // cloudmusic: string;
    // zhihu: string;
  };

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href={socials.github} target="_blank">
        <Icon icon='ri:github-line' />
      </a>
      {/* <a href={socials.qq} target="_blank">
        <Icon icon='ri:qq-line' />
      </a> */}
      {/* <a href={socials.wechat} target="_blank">
        <Icon icon='ri:wechat-line' />
      </a> */}
      <a className="dropdown dropdown--hoverable">
        <a href={socials.qq} target="_blank">
          <Icon icon='ri:qq-line'  />
        </a>
        <img
          width="50%"
          className="dropdown__menu"
          src='../img/qq.jpg'//'https://z3.ax1x.com/2021/05/16/g2S51s.jpg'//{useBaseUrl("/img/publicQR.webp")}
        />
      </a>
      <a className="dropdown dropdown--hoverable">
        <a href={socials.wechat} target="_blank">
          <Icon icon='ri:wechat-line'/>
        </a>
        <img
          width="50%"
          className="dropdown__menu"
          src='../img/wechat.jpg'//'https://z3.ax1x.com/2021/05/16/g2S51s.jpg'//{useBaseUrl("/img/publicQR.webp")}
        />
      </a>
    </animated.div>
  );
}

export default Hero;
