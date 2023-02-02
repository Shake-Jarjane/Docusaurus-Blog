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

          <animated.div style={trails[3]}>
            {/* about me */}
            {/* <a className={styles.intro} href={'./about'}>
              <Translate id="hompage.hero.introduce">About Me</Translate>
            </a> */}
           </animated.div>

            <div>
              {/* <a className="dropdown dropdown--hoverable">
                  <a href={socials.github} target="_blank">
                    <button className={styles.button_social}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/></svg>
                      &nbsp;
                      <span>{`Github`}</span>
                    </button>
                  </a>
                </a>&nbsp;&nbsp;&nbsp;

              <a className="dropdown dropdown--hoverable">
                <a href={socials.wechat} target="_blank">
                  <button className={styles.button_social}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    &nbsp;
                    <span>{`WeChat`}</span>
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/wechat.jpg'/>
              </a>&nbsp;&nbsp;&nbsp;

              <a className="dropdown dropdown--hoverable">
                <a href={socials.qq} target="_blank">
                  <button className={styles.button_social}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    &nbsp;
                    <span>{`QQ`}</span>
                    &nbsp;
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/qq.jpg'/>
              </a> */}

              <a className="dropdown dropdown--hoverable">
                <a href={socials.github} target="_blank">
                  <button className={styles.button_social2}>
                    <span className={styles.icon}>
                        <svg  width="40" height="40">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/>
                          </svg>
                        </svg>
                      </span>
                    <span className={styles.text}>{`Github`}</span>
                  </button>
                </a>
              </a>&nbsp;&nbsp;&nbsp;

              <a className="dropdown dropdown--hoverable">
                <a href={socials.wechat} target="_blank">
                  <button className={styles.button_social2}>
                    <span className={styles.icon}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12235" width="30" height="30"><path d="M234.667 320A42.667 42.667 0 1 0 320 320a42.667 42.667 0 1 0-85.333 0zM448 320a42.667 42.667 0 1 0 85.333 0A42.667 42.667 0 1 0 448 320z" p-id="12236" fill="#ffffff">
                      </path><path d="M896 807.68a248.107 248.107 0 0 0 95.36-192c0-133.973-114.133-244.48-261.12-260.907C704 208 558.293 96 384 96 189.867 96 32 234.667 32 405.333A292.053 292.053 0 0 0 147.2 634.24l-28.8 103.893a32 32 0 0 0 46.293 36.48l128-70.613a398.293 398.293 0 0 0 91.734 10.667c10.88 0 21.333 0 32.426-1.494 44.16 96.64 151.68 164.907 277.334 164.907a337.707 337.707 0 0 0 75.52-8.533L874.24 927.36a32 32 0 0 0 46.293-36.48z m-203.307 6.4A241.067 241.067 0 0 1 481.92 701.867l-12.587-29.44-7.68-30.934a170.667 170.667 0 0 1-2.346-26.453c0-103.467 93.44-188.8 213.333-198.187H704a275.2 275.2 0 0 1 31.787 2.987c109.44 16.853 192 98.133 192 195.84a188.587 188.587 0 0 1-85.334 154.027 32 32 0 0 0-12.586 34.773l8.533 30.72-49.067-27.52a32 32 0 0 0-23.893-2.773 272.64 272.64 0 0 1-72.107 9.386zM384 650.667A334.08 334.08 0 0 1 296.32 640a32.213 32.213 0 0 0-23.893 2.987l-71.894 39.68 14.294-51.627a32 32 0 0 0-12.587-34.773A232.747 232.747 0 0 1 96 405.333C96 270.08 225.28 160 384 160c137.813 0 253.227 82.987 281.387 193.28-151.68 12.587-270.72 125.013-270.72 261.76a232.32 232.32 0 0 0 2.986 34.987z" p-id="12237" fill="#ffffff">
                        </path>
                          <path d="M611.627 554.667H608a32 32 0 0 0-32 32 32 32 0 1 0 35.627-32zM746.667 586.667a32 32 0 1 0 64 0 32 32 0 1 0-64 0z" p-id="12238" fill="#ffffff"></path>
                        </svg>
                      </span>
                    <span className={styles.text}>{`Wechat`}</span>
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/wechat.jpg'/>
              </a>&nbsp;&nbsp;&nbsp;
              
              <a className="dropdown dropdown--hoverable">
                <a href={socials.qq} target="_blank">
                  <button className={styles.button_social2}>
                    <span className={styles.icon}>
                        <svg  width="30" height="25">
                          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15300" width="25" height="25">
                            <path d="M943.0016 579.072a1373.696 1373.696 0 0 0-30.8224-82.9952l-30.5152-72.4992 0.0512-8.6528C881.7664 166.7072 733.184 0 512 0S142.2336 166.7072 142.2336 414.8736l0.0512 8.6016-29.9008 71.0656a1355.776 1355.776 0 0 0-31.488 84.6336c-36.5568 111.9232-39.3216 193.3824-8.0896 242.0224 16.896 26.3168 43.3664 43.8272 73.216 48.7424a118.6816 118.6816 0 0 0 13.1072 92.0576c35.4304 56.9856 102.5536 61.2352 200.9088 61.2352 56.7808 0 117.1968-2.9184 151.9104-5.9392 34.7136 3.072 95.0784 5.9392 151.9104 5.9392 98.3552 0 165.4784-4.2496 200.8576-61.1328 15.9232-25.6 21.8112-59.4944 13.1584-92.16a107.776 107.776 0 0 0 73.216-48.7424c31.1808-48.64 28.4672-130.0992-8.0896-242.1248z m-81.7152 189.7984l-0.768 0.0512c-19.8656 0-73.9328-83.6608-73.9328-83.6608 0 49.664-26.88 121.344-84.992 168.1408 21.76 6.4 48.4352 16.1792 65.536 28.2624 15.4112 10.8032 13.4656 21.8112 10.7008 26.3168-5.9904 9.6256-56.9856 12.8-113.92 12.8-58.4192 0-123.136-3.328-151.9104-6.4-28.7744 3.1232-93.4912 6.4-151.9104 6.4-56.9344 0-107.8784-3.1744-113.92-12.8-2.7648-4.4544-4.7104-15.5136 10.7008-26.3168 17.1008-12.032 43.776-21.8624 65.536-28.2624-58.112-46.848-84.992-118.4768-84.992-168.192 0 0-54.1184 83.6608-73.9328 83.6608l-0.768-0.0512c-8.96-1.024-20.6848-47.0016 15.5648-158.0544 7.5776-23.296 17.9712-50.432 28.4672-76.544l38.3488-91.136c0-1.0752-0.512-19.0464-0.512-28.2624C244.6336 259.0208 321.9456 102.4 512 102.4c190.0544 0 267.3664 156.6208 267.3664 312.4736 0 9.2672-0.4608 27.1872-0.512 28.2624l38.4 91.136c10.496 26.112 20.8896 53.248 28.4672 76.544 36.2496 111.0528 24.5248 157.0304 15.5648 158.0544z" fill="#ffffff" p-id="15301"></path>
                          </svg>
                        </svg>
                      </span>
                    <span className={styles.text}>{`QQ`}</span>
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/qq.jpg'/>
              </a>&nbsp;&nbsp;&nbsp;
            </div><br/>
              
            <div>
              {/* <HomepageInfo /> */}
              <DayAndNight />
            </div><br/>
            <a /* href="https://github.com/Shake-Jarjane/Docusaurus-Blog/commits/main" */ target="_blank">
              <img src="https://img.shields.io/github/last-commit/Shake-Jarjane/Docusaurus-Blog?color=blue&style=for-the-badge" />
            </a>
            <br/><br/>

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
