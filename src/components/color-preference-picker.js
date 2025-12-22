import React, {useCallback} from 'react'
import {SegmentedControl} from '@primer/react'
import {DeviceDesktopIcon, MoonIcon, SunIcon} from '@primer/octicons-react'

const MODE_ICONS = [
  {id: 'auto', name: 'System', icon: DeviceDesktopIcon},
  {id: 'day', name: 'Day', icon: SunIcon},
  {id: 'night', name: 'Night', icon: MoonIcon},
]

export const ColorPreferencePicker = ({preferredColorMode, setColorPreference}) => {
  const handleColorModeChange = useCallback(
    modeIndex => {
      const mode = MODE_ICONS[modeIndex].id
      setColorPreference(mode)
    },
    [setColorPreference],
  )

  return (
    <SegmentedControl onChange={handleColorModeChange} aria-label="Color mode">
      {MODE_ICONS.map((mode, index) => (
        <SegmentedControl.IconButton
          icon={mode.icon}
          aria-label={mode.name}
          key={index}
          selected={mode.id === preferredColorMode}
        ></SegmentedControl.IconButton>
      ))}
    </SegmentedControl>
  )
}
