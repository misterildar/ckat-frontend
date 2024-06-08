import React, { useEffect } from 'react';

import styles from './styles.module.scss';

interface IframeProps {
  size: 'big' | 'small';
  theme: 'light' | 'dark';
  branchId: string;
  orgId?: string;
}

const Iframe2Gis: React.FC<IframeProps> = ({
  size,
  theme,
  branchId,
  orgId = '',
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = `
      ((r, f) => {
        const l = document.getElementById(r);
        l.contentWindow.document.open();
        l.contentWindow.document.write(decodeURIComponent(escape(atob(f))));
        l.contentWindow.document.close();
      })("big_light_70000001006934973", "${btoa(
        `<head><script type="text/javascript">
          window.__size__='${size}'; 
          window.__theme__='${theme}';
          window.__branchId__='${branchId}';
          window.__orgId__='${orgId}';
        </script><script crossorigin="anonymous" type="module" src="https://disk.2gis.com/widget-constructor/assets/iframe.js"></script><link rel="modulepreload" crossorigin="anonymous" href="https://disk.2gis.com/widget-constructor/assets/defaults.js"><link rel="stylesheet" crossorigin="anonymous" href="https://disk.2gis.com/widget-constructor/assets/defaults.css"></head><body><div id="iframe"></div></body>`
      )}");
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [size, theme, branchId, orgId]);

  return (
    <div className={styles.iframe}>
      <iframe
        id='big_light_70000001006934973'
        style={{ border: 'none' }}
        width='100%'
        height='100%'
        sandbox='allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation'
      />
    </div>
  );
};

export default Iframe2Gis;
