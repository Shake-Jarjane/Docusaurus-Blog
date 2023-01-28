// import React from 'react';
// import {useThemeConfig} from '@docusaurus/theme-common';
// import {useColorMode} from '@docusaurus/theme-common';
// import BrowserOnly from '@docusaurus/BrowserOnly';
// import Giscus, {GiscusProps} from '@giscus/react';

// export default function Comment(): JSX.Element {
//   const themeConfig = useThemeConfig() as any;

//   const theme = useColorMode().colorMode === 'dark' ? 'dark' : 'light';

//   const options: GiscusProps = {
//     ...(themeConfig.giscus as GiscusProps),
//     id: 'comments',
//     reactionsEnabled: '1',
//     emitMetadata: '0',
//     inputPosition: 'top',
//     theme,
//   };
//   return (
//     <BrowserOnly fallback={<div></div>}>
//       {() => <Giscus {...options} />}
//     </BrowserOnly>
//   );
// }


import {useColorMode} from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

import React, { forwardRef, useEffect, useState } from 'react';
import Giscus, { GiscusProps } from '@giscus/react';
import { useThemeConfig, ThemeConfig } from '@docusaurus/theme-common';

interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps & { darkTheme: string };
}

export const Comment = forwardRef<HTMLDivElement>((_props, ref) => {
  const themeConfig = useThemeConfig() as any;
  const theme = useColorMode().colorMode === 'dark' ? 'dark' : 'light';
  const { giscus } = useThemeConfig() as CustomThemeConfig;
  const [routeDidUpdate, setRouteDidUpdate] = useState(false);

  useEffect(() => {
    function eventHandler(e) {
      setRouteDidUpdate(true);
    }

    window.emitter.on('onRouteDidUpdate', eventHandler);

    return () => {
      window.emitter.off('onRouteDidUpdate', eventHandler);
    };
  }, []);

  if (!routeDidUpdate) {
    return null;
  }

  const options: GiscusProps = {
    ...(themeConfig.giscus as GiscusProps),
    id: 'comments',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    theme,
  };
  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => <Giscus {...options} />}
    </BrowserOnly>
  );
});

export default Comment;