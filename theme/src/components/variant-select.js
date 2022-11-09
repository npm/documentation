// VariantSelect: allows a variant to be set up within a document hierarchy
//
// For example, given two paths `/docs/v1.0/foo` and `/docs/v2.0/foo`, the
// second folder acts as a variant.  If you use <VariantSelect root="/docs">
// then you'll get a selection for the different variants (v1.0, v2.0).

import React from 'react';
import { ActionList, ActionMenu, ThemeProvider } from '@primer/react'
import NavHierarchy from '../nav-hierarchy'

function VariantSelect(props) {
  const [open, setOpen] = React.useState(false)
  const path = NavHierarchy.getPath(props.location.pathname);
  const vp = NavHierarchy.getVariantAndPage(props.root, path);

  if (!vp) {
      return null;
  }

  const variantPages = NavHierarchy.getVariantsForPage(props.root, vp.page);
  const items = [];
  let selectedItem = variantPages[0];
  
  if (variantPages.length === 0) {
      return null;
  }

  function anchorClickHandler(event, url) {
    event.preventDefault()
    window.location.href = url + "?v=true";
  }

  function onItemEnterKey(event, url) {
    if (event.key === 'Enter') {
        window.location.href = url + "?v=true";
    }
  }

  variantPages.forEach((match, index) => {
      if (match.page.url === path) {
          selectedItem = match;
      }
      items.push(<ActionList.Item onKeyDown={(e) => onItemEnterKey(e, match.page.url)} onClick={e => anchorClickHandler(e, match.page.url)} id={match.variant.shortName} key={index}>
        <span aria-label={`${match.variant.title}. List items ${index + 1} of ${variantPages.length}`}>
          {match.variant.title}
        </span>
      </ActionList.Item>);
  });


  return (
    <ThemeProvider>
      <label id="label-versions-list-item" htmlFor='variant-select'>Select CLI Version:</label>
      <ActionMenu id="versions-list-item" aria-labelledby="label-versions-list-item" open={open} onOpenChange={setOpen}>
        <ActionMenu.Button aria-label='Version release' autofocus="true">{selectedItem.variant.title}</ActionMenu.Button>
        <ActionMenu.Overlay width="medium" onEscape={() => setOpen(false)}>
          <ActionList>
            {items}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </ThemeProvider>
  )
}

export default VariantSelect
