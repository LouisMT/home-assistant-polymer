import { Entity, convertEntities } from "../../../../src/fake_data/entity";

export const demoEntitiesKernehed: () => Entity[] = () =>
  convertEntities({
    "zone.anna": {
      entity_id: "zone.anna",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Anna",
        icon: "mdi:home-variant",
      },
      last_changed: "2019-01-18T15:51:22.731926+00:00",
      last_updated: "2019-01-18T15:51:22.731926+00:00",
      context: { id: "77f8305e96e24d8ebbac1d52a394f725", user_id: null },
    },
    "zone.peak_hq": {
      entity_id: "zone.peak_hq",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "PEAK HQ",
        icon: "mdi:briefcase",
      },
      last_changed: "2019-01-18T15:51:22.732676+00:00",
      last_updated: "2019-01-18T15:51:22.732676+00:00",
      context: { id: "10a51d25775144ca84d19aa1fec3f473", user_id: null },
    },
    "zone.bellas_jobb": {
      entity_id: "zone.bellas_jobb",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Bellas jobb",
        icon: "mdi:briefcase",
      },
      last_changed: "2019-01-18T15:51:22.733288+00:00",
      last_updated: "2019-01-18T15:51:22.733288+00:00",
      context: { id: "c8001f0ab45f43a2b66af3dc849aca36", user_id: null },
    },
    "zone.geab": {
      entity_id: "zone.geab",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "GEAB",
        icon: "mdi:briefcase",
      },
      last_changed: "2019-01-18T15:51:22.733871+00:00",
      last_updated: "2019-01-18T15:51:22.733871+00:00",
      context: { id: "57ba8b28976649ae90ff3d0652daa551", user_id: null },
    },
    "zone.mamma": {
      entity_id: "zone.mamma",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Mamma",
        icon: "mdi:home-variant",
      },
      last_changed: "2019-01-18T15:51:22.735150+00:00",
      last_updated: "2019-01-18T15:51:22.735150+00:00",
      context: { id: "ebeb9fa7177746ddb5edd43d076b5209", user_id: null },
    },
    "zone.skolan": {
      entity_id: "zone.skolan",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Skolan",
        icon: "mdi:school",
      },
      last_changed: "2019-01-18T15:51:22.735883+00:00",
      last_updated: "2019-01-18T15:51:22.735883+00:00",
      context: { id: "70c93139b05e465e9d7f3645f473061c", user_id: null },
    },
    "zone.ica_fjallbacken": {
      entity_id: "zone.ica_fjallbacken",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "ICA Fj\u00e4llbacken",
        icon: "mdi:cart",
      },
      last_changed: "2019-01-18T15:51:22.736498+00:00",
      last_updated: "2019-01-18T15:51:22.736498+00:00",
      context: { id: "d17736ee569d4b9ab92c608bad43c14d", user_id: null },
    },
    "zone.tempo": {
      entity_id: "zone.tempo",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Tempo",
        icon: "mdi:cart",
      },
      last_changed: "2019-01-18T15:51:22.737081+00:00",
      last_updated: "2019-01-18T15:51:22.737081+00:00",
      context: { id: "e3917e5da14443ea8da81abcb9e3f0d1", user_id: null },
    },
    "zone.home": {
      entity_id: "zone.home",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100,
        friendly_name: "Hem",
        icon: "mdi:home",
      },
      last_changed: "2019-01-18T15:51:22.737655+00:00",
      last_updated: "2019-01-18T15:51:22.737655+00:00",
      context: { id: "d04a42c532614232bfebbbe6c27395eb", user_id: null },
    },
    "sensor.total_clients_wireless": {
      entity_id: "sensor.total_clients_wireless",
      state: "18",
      attributes: { friendly_name: "Total clients", icon: "mdi:account-group" },
      last_changed: "2019-01-18T16:00:34.285208+00:00",
      last_updated: "2019-01-18T16:00:34.285208+00:00",
      context: { id: "6e6fe5b3265948289e7817ca7dc74bea", user_id: null },
    },
    "sensor.zwave_battery_front_door": {
      entity_id: "sensor.zwave_battery_front_door",
      state: "63",
      attributes: { friendly_name: "Battery", icon: "mdi:battery-60" },
      last_changed: "2019-01-18T15:55:28.392149+00:00",
      last_updated: "2019-01-18T15:55:28.392149+00:00",
      context: { id: "eb2f5a4c8d534e83b2bcc7f87e8a9851", user_id: null },
    },
    "sensor.oskar_devices": {
      entity_id: "sensor.oskar_devices",
      state: "Home",
      attributes: {
        friendly_name: "Oskar",
        entity_picture: "/assets/kernehed/oscar.jpg",
      },
      last_changed: "2019-01-18T15:53:16.145962+00:00",
      last_updated: "2019-01-18T15:53:16.145962+00:00",
      context: { id: "0e20cf8e4fef40839e4c06921d95b139", user_id: null },
    },
    "sensor.bella_devices": {
      entity_id: "sensor.bella_devices",
      state: "Home",
      attributes: {
        friendly_name: "Bella",
        entity_picture: "/assets/kernehed/bella.jpg",
      },
      last_changed: "2019-01-18T15:53:16.152450+00:00",
      last_updated: "2019-01-18T15:53:16.152450+00:00",
      context: { id: "43b2512b239f46efbdcc4241c3140b06", user_id: null },
    },
    "sensor.oskar_bluetooth": {
      entity_id: "sensor.oskar_bluetooth",
      state: "Eve's room",
      attributes: {
        friendly_name: "Oskar",
        entity_picture: "/assets/kernehed/oscar.jpg",
      },
      last_changed: "2019-01-18T16:04:26.642398+00:00",
      last_updated: "2019-01-18T16:04:26.642398+00:00",
      context: { id: "7d3de12e4c424bdf9242fa3128fc0a7f", user_id: null },
    },
    "sensor.battery_oskar": {
      entity_id: "sensor.battery_oskar",
      state: "73",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "oskar batteri",
        device_class: "battery",
      },
      last_changed: "2019-01-18T15:54:50.511369+00:00",
      last_updated: "2019-01-18T15:54:50.511369+00:00",
      context: { id: "566a01d2fbf8482c9d295405aea3ef18", user_id: null },
    },
    "sensor.battery_bella": {
      entity_id: "sensor.battery_bella",
      state: "88",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "bella batteri",
        device_class: "battery",
      },
      last_changed: "2019-01-18T15:53:16.248139+00:00",
      last_updated: "2019-01-18T15:53:16.248139+00:00",
      context: { id: "0daeaca38b584becb17ddeaff6c0821e", user_id: null },
    },
    "binary_sensor.unifi_camera": {
      entity_id: "binary_sensor.unifi_camera",
      state: "off",
      attributes: {
        friendly_name: "R\u00f6relsesensor kamera",
        icon: "mdi:walk",
      },
      last_changed: "2019-01-18T15:51:25.599307+00:00",
      last_updated: "2019-01-18T15:51:25.599307+00:00",
      context: { id: "6c34816433ac4e4a8fb1d66586ff8312", user_id: null },
    },
    "sensor.db_size": {
      entity_id: "sensor.db_size",
      state: "435",
      attributes: {
        unit_of_measurement: "MB",
        friendly_name: "DB size",
        icon: "mdi:database",
      },
      last_changed: "2019-01-18T16:02:26.081784+00:00",
      last_updated: "2019-01-18T16:02:26.081784+00:00",
      context: { id: "185f9f7391a7470e95f591c3278012f7", user_id: null },
    },
    "input_select.christmas_pattern": {
      entity_id: "input_select.christmas_pattern",
      state: "None",
      attributes: {
        options: [
          "None",
          "Color Waves",
          "Palette Test",
          "Pride",
          "Rainbow",
          "Rainbow Glitter",
          "Snow Glitter",
          "Confetti",
          "Juggle",
          "Sinelon",
          "BPM",
          "Solid",
        ],
        friendly_name: "Choose pattern:",
        icon: "mdi:snowflake",
      },
      last_changed: "2019-01-18T15:51:27.137496+00:00",
      last_updated: "2019-01-18T15:51:27.137496+00:00",
      context: { id: "17f2d1bc9ec345589b135d3c5d45f485", user_id: null },
    },
    "input_select.christmas_palette": {
      entity_id: "input_select.christmas_palette",
      state: "None",
      attributes: {
        options: [
          "None",
          "Rainbow",
          "Rainbow Stripe",
          "Cloud",
          "Lava",
          "Ocean",
          "Forest",
          "Party",
          "Heat",
        ],
        friendly_name: "Choose palette:",
        icon: "mdi:vanish",
      },
      last_changed: "2019-01-18T15:51:27.138686+00:00",
      last_updated: "2019-01-18T15:51:27.138686+00:00",
      context: { id: "4eecf1f28d744100aef459c9262ebff8", user_id: null },
    },
    "binary_sensor.harmony_hub": {
      entity_id: "binary_sensor.harmony_hub",
      state: "on",
      attributes: {
        round_trip_time_avg: "1.971",
        round_trip_time_max: "2.937",
        round_trip_time_mdev: "",
        round_trip_time_min: "1.679",
        friendly_name: "Harmony hub",
        device_class: "connectivity",
        icon: "mdi:remote",
      },
      last_changed: "2019-01-18T15:51:29.431080+00:00",
      last_updated: "2019-01-18T16:01:40.417721+00:00",
      context: { id: "28f6ae7c0f834c41858bb6c08d4baabf", user_id: null },
    },
    "switch.rest_julbelysning": {
      entity_id: "switch.rest_julbelysning",
      state: "on",
      attributes: { friendly_name: "Julbelysning" },
      last_changed: "2019-01-18T15:53:16.345017+00:00",
      last_updated: "2019-01-18T15:53:16.345017+00:00",
      context: { id: "0252d0bce23c4329a2beb62094d3cfe7", user_id: null },
    },
    "binary_sensor.ubiquiti_nvr": {
      entity_id: "binary_sensor.ubiquiti_nvr",
      state: "on",
      attributes: {
        round_trip_time_avg: "18.002",
        round_trip_time_max: "20.714",
        round_trip_time_mdev: "",
        round_trip_time_min: "15.599",
        friendly_name: "NVR",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
      last_changed: "2019-01-18T15:51:38.352047+00:00",
      last_updated: "2019-01-18T16:01:49.078087+00:00",
      context: { id: "02c4f1b1cc3447748cf7956311b27e6f", user_id: null },
    },
    "binary_sensor.server_1": {
      entity_id: "binary_sensor.server_1",
      state: "on",
      attributes: {
        round_trip_time_avg: "24.237",
        round_trip_time_max: "30.101",
        round_trip_time_mdev: "",
        round_trip_time_min: "18.923",
        friendly_name: "ESXIone server",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
      last_changed: "2019-01-18T15:51:46.562111+00:00",
      last_updated: "2019-01-18T16:01:44.857908+00:00",
      context: { id: "8b3645c1acbb418f8594b30bffd8df04", user_id: null },
    },
    "binary_sensor.windows_server": {
      entity_id: "binary_sensor.windows_server",
      state: "on",
      attributes: {
        round_trip_time_avg: "16.386",
        round_trip_time_max: "16.579",
        round_trip_time_mdev: "",
        round_trip_time_min: "16.023",
        friendly_name: "Windows server",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
      last_changed: "2019-01-18T15:51:51.945544+00:00",
      last_updated: "2019-01-18T16:02:00.100310+00:00",
      context: { id: "84fc4435143243a398235928f4d46c1c", user_id: null },
    },
    "binary_sensor.ubiquiti_controller": {
      entity_id: "binary_sensor.ubiquiti_controller",
      state: "on",
      attributes: {
        round_trip_time_avg: "18.033",
        round_trip_time_max: "20.503",
        round_trip_time_mdev: "",
        round_trip_time_min: "15.703",
        friendly_name: "Ubiquiti controller",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
      last_changed: "2019-01-18T15:52:00.042894+00:00",
      last_updated: "2019-01-18T16:02:04.175934+00:00",
      context: { id: "92d789cb452147d5b0d433f7495e1b21", user_id: null },
    },
    "binary_sensor.server_2": {
      entity_id: "binary_sensor.server_2",
      state: "on",
      attributes: {
        round_trip_time_avg: "25.306",
        round_trip_time_max: "30.600",
        round_trip_time_mdev: "",
        round_trip_time_min: "21.483",
        friendly_name: "ESXItwo server",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
      last_changed: "2019-01-18T15:52:08.637459+00:00",
      last_updated: "2019-01-18T16:02:33.942666+00:00",
      context: { id: "6215707ffd1d42ad9f72a40317cb2472", user_id: null },
    },
    "alarm_control_panel.kernehed_manison": {
      entity_id: "alarm_control_panel.kernehed_manison",
      state: "disarmed",
      attributes: {
        code_format: ".+",
        changed_by: "",
        immediate: [],
        delayed: [],
        ignored: [
          "binary_sensor.back_door_sensor",
          "binary_sensor.skafferiet_motion_sensor",
          "binary_sensor.kallaren_motion_sensor",
          "binary_sensor.trapp_motion_sensor",
          "binary_sensor.banksensor",
          "binary_sensor.front_door_sensor",
          "binary_sensor.tvattstugan_motion_sensor",
        ],
        allsensors: [
          "binary_sensor.back_door_sensor",
          "binary_sensor.skafferiet_motion_sensor",
          "binary_sensor.kallaren_motion_sensor",
          "binary_sensor.trapp_motion_sensor",
          "binary_sensor.banksensor",
          "binary_sensor.front_door_sensor",
          "binary_sensor.tvattstugan_motion_sensor",
        ],
        code_to_arm: false,
        panel_locked: false,
        passcode_attempts: -1,
        passcode_attempts_timeout: 900,
        changedbyuser: null,
        panic_mode: "deactivated",
        arm_state: "disarmed",
        enable_perimeter_mode: true,
        enable_persistence: true,
        enable_log: true,
        log_size: 10,
        supported_statuses_on: [
          "on",
          "true",
          "unlocked",
          "open",
          "detected",
          "motion",
          "motion_detected",
          "motion detected",
        ],
        supported_statuses_off: [
          "off",
          "false",
          "locked",
          "closed",
          "undetected",
          "no_motion",
          "standby",
        ],
        updateUI: false,
        bwalarm_version: "1.1.3",
        py_version: [3, 6, 6, "final", 0],
        users: [
          {
            id: "3e84584273bb45b39597eeca75c61ed3",
            name: "Hass.io",
            enabled: true,
            code: "****",
            picture: "/local/images/ha.png",
            disable_animations: false,
          },
          {
            id: "559b6d8184d2461cb326a5da9e235222",
            name: "Our Manison",
            enabled: true,
            code: "****",
            picture: "/local/images/ha.png",
            disable_animations: false,
          },
          {
            id: "7c0447d2ec824aa98b81044ad9ec198f",
            name: "Legacy API password user",
            enabled: false,
            code: "****",
            picture: "/local/images/ha.png",
            disable_animations: false,
          },
        ],
        panel: {
          cameras: ["camera.kernehed_entre"],
          enable_sensors_panel: "True",
          camera_update_interval: "",
          panel_title: "Larmet",
          enable_clock: "True",
          enable_camera_panel: "True",
          enable_custom_panel: "False",
          round_buttons: "True",
          shadow_effect: "True",
          enable_serif_font: "True",
          enable_weather: "True",
        },
        logs: [
          [1547471423.044971, "HA", 0, null],
          [1547617402.0813534, "HA", 4, null],
          [1547646348.0161366, "HA", 5, "binary_sensor.front_door_sensor"],
          [1547646359.6248462, "HA", 0, null],
          [1547704923.3253074, "HA", 4, null],
          [1547736026.435811, "HA", 5, "binary_sensor.front_door_sensor"],
          [1547736043.3628922, "HA", 0, null],
          [1547736074.0326948, "HA", 0, null],
          [1547792963.66214, "HA", 4, null],
          [1547825941.6920404, "HA", 0, null],
        ],
        mqtt: {
          enable_mqtt: false,
          override_code: false,
          command_topic: "home/alarm/set",
          payload_arm_away: "ARM_AWAY",
          payload_arm_home: "ARM_HOME",
          qos: 0,
          payload_disarm: "DISARM",
          pending_on_warning: false,
          state_topic: "home/alarm",
          payload_arm_night: "ARM_NIGHT",
        },
        states: {
          armed_away: {
            immediate: [
              "binary_sensor.kallaren_motion_sensor",
              "binary_sensor.trapp_motion_sensor",
              "binary_sensor.banksensor",
              "binary_sensor.tvattstugan_motion_sensor",
              "binary_sensor.skafferiet_motion_sensor",
            ],
            delayed: [
              "binary_sensor.back_door_sensor",
              "binary_sensor.front_door_sensor",
            ],
            override: [],
            pending_time: 25,
            warning_time: 25,
            trigger_time: 300,
          },
          armed_home: {
            immediate: [],
            delayed: [
              "binary_sensor.back_door_sensor",
              "binary_sensor.front_door_sensor",
            ],
            override: [],
            pending_time: 25,
            warning_time: 25,
            trigger_time: 300,
          },
          armed_perimeter: {
            immediate: [],
            delayed: [
              "binary_sensor.back_door_sensor",
              "binary_sensor.front_door_sensor",
            ],
            override: [],
            pending_time: 25,
            warning_time: 25,
            trigger_time: 600,
          },
        },
        friendly_name: "Our Manison",
      },
      last_changed: "2019-01-18T15:52:08.647500+00:00",
      last_updated: "2019-01-18T15:52:08.647500+00:00",
      context: { id: "d7d20117f8dc430699f85ebe49d00345", user_id: null },
    },
    "sensor.qbittorrent_down_speed": {
      entity_id: "sensor.qbittorrent_down_speed",
      state: "0.0",
      attributes: {
        unit_of_measurement: "kB/s",
        friendly_name: "Nedladdning",
        icon: "mdi:file-download",
      },
      last_changed: "2019-01-18T15:52:08.782929+00:00",
      last_updated: "2019-01-18T15:52:08.782929+00:00",
      context: { id: "a680b2cbf5d64b98b0a37595a1939197", user_id: null },
    },
    "sensor.qbittorrent_status": {
      entity_id: "sensor.qbittorrent_status",
      state: "idle",
      attributes: { friendly_name: "Status", icon: "mdi:resistor" },
      last_changed: "2019-01-18T15:56:54.148361+00:00",
      last_updated: "2019-01-18T15:56:54.148361+00:00",
      context: { id: "e7675363c274496eaa23346ff3383772", user_id: null },
    },
    "sensor.qbittorrent_up_speed": {
      entity_id: "sensor.qbittorrent_up_speed",
      state: "0.0",
      attributes: {
        unit_of_measurement: "kB/s",
        friendly_name: "Uppladdning",
        icon: "mdi:file-upload",
      },
      last_changed: "2019-01-18T15:52:08.872888+00:00",
      last_updated: "2019-01-18T15:52:08.872888+00:00",
      context: { id: "cfb7424d3c54429baab49ef3dda53a33", user_id: null },
    },
    "sensor.pi_hole_ads_blocked_today": {
      entity_id: "sensor.pi_hole_ads_blocked_today",
      state: "5952",
      attributes: {
        domains_blocked: 112493,
        unit_of_measurement: "ads",
        friendly_name: "Pi-Hole Ads Blocked Today",
        icon: "mdi:close-octagon-outline",
      },
      last_changed: "2019-01-18T16:03:05.284888+00:00",
      last_updated: "2019-01-18T16:03:05.284888+00:00",
      context: { id: "d9191530bc94401ca88a2a1aff07387d", user_id: null },
    },
    "sensor.pi_hole_dns_unique_clients": {
      entity_id: "sensor.pi_hole_dns_unique_clients",
      state: "13",
      attributes: {
        domains_blocked: 112493,
        unit_of_measurement: "clients",
        friendly_name: "Pi-Hole DNS Unique Clients",
        icon: "mdi:account-outline",
      },
      last_changed: "2019-01-18T15:52:09.605689+00:00",
      last_updated: "2019-01-18T15:52:09.605689+00:00",
      context: { id: "e9f0c3578ff4454fb53121d99c606e74", user_id: null },
    },
    "sensor.pi_hole_dns_queries_today": {
      entity_id: "sensor.pi_hole_dns_queries_today",
      state: "14730",
      attributes: {
        domains_blocked: 112493,
        unit_of_measurement: "queries",
        friendly_name: "Pi-Hole DNS Queries Today",
        icon: "mdi:comment-question-outline",
      },
      last_changed: "2019-01-18T16:03:05.274660+00:00",
      last_updated: "2019-01-18T16:03:05.274660+00:00",
      context: { id: "dab495be096549438bca2bb5078e41c1", user_id: null },
    },
    "sensor.memory_free": {
      entity_id: "sensor.memory_free",
      state: "514.3",
      attributes: {
        unit_of_measurement: "MiB",
        friendly_name: "Memory free",
        icon: "mdi:memory",
      },
      last_changed: "2019-01-18T16:05:09.553687+00:00",
      last_updated: "2019-01-18T16:05:09.553687+00:00",
      context: { id: "8a208015f2c74ed39bada502922d0d0d", user_id: null },
    },
    "sensor.processor_use": {
      entity_id: "sensor.processor_use",
      state: "9",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Processor use",
        icon: "mdi:memory",
      },
      last_changed: "2019-01-18T16:05:09.793229+00:00",
      last_updated: "2019-01-18T16:05:09.793229+00:00",
      context: { id: "c5f93e10c82a431a95f85587a5e8ce95", user_id: null },
    },
    "binary_sensor.gaming_pc": {
      entity_id: "binary_sensor.gaming_pc",
      state: "on",
      attributes: {
        round_trip_time_avg: "0.560",
        round_trip_time_max: "0.628",
        round_trip_time_mdev: "",
        round_trip_time_min: "0.477",
        friendly_name: "Oskars dator",
        device_class: "connectivity",
        icon: "mdi:laptop",
      },
      last_changed: "2019-01-18T15:52:19.270243+00:00",
      last_updated: "2019-01-18T16:02:25.800945+00:00",
      context: { id: "46211ef0d63e4d75b521cf9ffe121b06", user_id: null },
    },
    "sensor.speedtest_download": {
      entity_id: "sensor.speedtest_download",
      state: "37.89",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 47690753,
        bytes_sent: 61612032,
        server_country: "Sweden",
        server_id: "21028",
        latency: 32.049,
        server_name: "Kista",
        unit_of_measurement: "Mbit/s",
        friendly_name: "Speedtest Download",
        icon: "mdi:speedometer",
      },
      last_changed: "2019-01-18T16:01:02.379273+00:00",
      last_updated: "2019-01-18T16:01:02.379273+00:00",
      context: { id: "820da4cd237c49eb83dd1f2ad109882a", user_id: null },
    },
    "sensor.speedtest_upload": {
      entity_id: "sensor.speedtest_upload",
      state: "49.0",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 47690753,
        bytes_sent: 61612032,
        server_country: "Sweden",
        server_id: "21028",
        latency: 32.049,
        server_name: "Kista",
        unit_of_measurement: "Mbit/s",
        friendly_name: "Speedtest Upload",
        icon: "mdi:speedometer",
      },
      last_changed: "2019-01-18T16:01:02.722583+00:00",
      last_updated: "2019-01-18T16:01:02.722583+00:00",
      context: { id: "f390680ee9b44e6aa1ae44ece757f329", user_id: null },
    },
    "sensor.speedtest_ping": {
      entity_id: "sensor.speedtest_ping",
      state: "32.049",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 47690753,
        bytes_sent: 61612032,
        server_country: "Sweden",
        server_id: "21028",
        latency: 32.049,
        server_name: "Kista",
        unit_of_measurement: "ms",
        friendly_name: "Speedtest Ping",
        icon: "mdi:speedometer",
      },
      last_changed: "2019-01-18T16:01:02.809026+00:00",
      last_updated: "2019-01-18T16:01:02.809026+00:00",
      context: { id: "a81bd7b4f4f748b290b2156e4b43b919", user_id: null },
    },
    "sensor.last_boot": {
      entity_id: "sensor.last_boot",
      state: "2019-01-18T16:49:29+01:00",
      attributes: {
        unit_of_measurement: "",
        friendly_name: "Last boot",
        icon: "mdi:clock",
        device_class: "timestamp",
      },
      last_changed: "2019-01-18T15:52:24.128311+00:00",
      last_updated: "2019-01-18T15:52:24.128311+00:00",
      context: { id: "5d0f7cdb75074973aa06d08e3680ebbf", user_id: null },
    },
    "sensor.plex": {
      entity_id: "sensor.plex",
      state: "0",
      attributes: {
        unit_of_measurement: "Watching",
        friendly_name: "Plex",
        icon: "mdi:plex",
      },
      last_changed: "2019-01-18T15:52:24.140024+00:00",
      last_updated: "2019-01-18T15:52:24.140024+00:00",
      context: { id: "2f992b87ce544a489bbf2d8929b0e4a2", user_id: null },
    },
    "binary_sensor.teamspeak": {
      entity_id: "binary_sensor.teamspeak",
      state: "on",
      attributes: {
        round_trip_time_avg: "19.842",
        round_trip_time_max: "26.215",
        round_trip_time_mdev: "",
        round_trip_time_min: "15.690",
        friendly_name: "Teamspeak server",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
      last_changed: "2019-01-18T15:52:28.615587+00:00",
      last_updated: "2019-01-18T16:02:21.732951+00:00",
      context: { id: "73ca74db48e74164b2aeaadc6cce5d34", user_id: null },
    },
    "sensor.disk_free_home": {
      entity_id: "sensor.disk_free_home",
      state: "8.9",
      attributes: {
        unit_of_measurement: "GiB",
        friendly_name: "Disk free /home",
        icon: "mdi:harddisk",
      },
      last_changed: "2019-01-18T16:02:03.575620+00:00",
      last_updated: "2019-01-18T16:02:03.575620+00:00",
      context: { id: "02f4dad30931408081c02e89bafa1171", user_id: null },
    },
    "weather.smhi_vader": {
      entity_id: "weather.smhi_vader",
      state: "sunny",
      attributes: {
        temperature: -5,
        humidity: 75,
        pressure: 1003,
        wind_bearing: 263,
        wind_speed: 8,
        visibility: 20.6,
        attribution: "Swedish weather institute (SMHI)",
        forecast: [
          {
            datetime: "2019-01-19T13:00:00+01:00",
            temperature: -2,
            templow: -7,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-20T13:00:00+01:00",
            temperature: -7,
            templow: -12,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-21T13:00:00+01:00",
            temperature: -12,
            templow: -16,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-22T13:00:00+01:00",
            temperature: -5,
            templow: -17,
            precipitation: 2,
            condition: "snowy",
          },
          {
            datetime: "2019-01-23T13:00:00+01:00",
            temperature: -5,
            templow: -7,
            precipitation: 2,
            condition: "partlycloudy",
          },
          {
            datetime: "2019-01-24T13:00:00+01:00",
            temperature: -7,
            templow: -11,
            precipitation: 2,
            condition: "snowy",
          },
          {
            datetime: "2019-01-25T13:00:00+01:00",
            temperature: -10,
            templow: -10,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-26T13:00:00+01:00",
            temperature: -12,
            templow: -12,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-27T13:00:00+01:00",
            temperature: -4,
            templow: -6,
            precipitation: 0,
            condition: "partlycloudy",
          },
        ],
        cloudiness: 25,
        friendly_name: "V\u00e4der",
      },
      last_changed: "2019-01-18T15:52:33.173548+00:00",
      last_updated: "2019-01-18T15:52:33.173548+00:00",
      context: { id: "1c85566e7912415eb124dd9834a4f906", user_id: null },
    },
    "binary_sensor.ubiquiti_switch": {
      entity_id: "binary_sensor.ubiquiti_switch",
      state: "on",
      attributes: {
        round_trip_time_avg: "0.459",
        round_trip_time_max: "0.535",
        round_trip_time_mdev: "",
        round_trip_time_min: "0.324",
        friendly_name: "Switch",
        device_class: "connectivity",
        icon: "mdi:nas",
      },
      last_changed: "2019-01-18T15:52:35.266657+00:00",
      last_updated: "2019-01-18T16:02:29.854283+00:00",
      context: { id: "dc9ba8c7aa194d2bbe84331506d8320f", user_id: null },
    },
    "binary_sensor.entre_kamera": {
      entity_id: "binary_sensor.entre_kamera",
      state: "on",
      attributes: {
        round_trip_time_avg: "0.528",
        round_trip_time_max: "0.626",
        round_trip_time_mdev: "",
        round_trip_time_min: "0.358",
        friendly_name: "Entr\u00e9 kamera",
        device_class: "connectivity",
        icon: "mdi:cctv",
      },
      last_changed: "2019-01-18T15:52:45.321631+00:00",
      last_updated: "2019-01-18T16:01:55.993590+00:00",
      context: { id: "511076d91fb94bafaae7d5ebe08bfee7", user_id: null },
    },
    "sensor.bella_tid_till_hem": {
      entity_id: "sensor.bella_tid_till_hem",
      state: "0",
      attributes: {
        destination_addresses: ["Stockholm, Sweden"],
        origin_addresses: ["Stockholm, Sweden"],
        status: "OK",
        mode: "transit",
        units: "metric",
        duration: "1 min",
        distance: "12 m",
        unit_of_measurement: "min",
        friendly_name: "Antal minuter hem",
        icon: "mdi:timer",
      },
      last_changed: "2019-01-18T15:53:19.161560+00:00",
      last_updated: "2019-01-18T15:53:19.161560+00:00",
      context: { id: "3da5acfb211d47afb9c744a6ba135344", user_id: null },
    },
    "sensor.oskar_tid_till_hem": {
      entity_id: "sensor.oskar_tid_till_hem",
      state: "0",
      attributes: {
        destination_addresses: ["Stockholm, Sweden"],
        origin_addresses: ["Stockholm, Sweden"],
        status: "OK",
        mode: "driving",
        units: "metric",
        duration_in_traffic: "1 min",
        duration: "1 min",
        distance: "2 m",
        unit_of_measurement: "min",
        friendly_name: "Antal minuter hem",
        icon: "mdi:timer",
      },
      last_changed: "2019-01-18T15:53:19.197183+00:00",
      last_updated: "2019-01-18T15:53:19.197183+00:00",
      context: { id: "cade22f8710648868dd55a9d562ebe76", user_id: null },
    },
    "lock.polycontrol_danalock_v3_btze_locked": {
      entity_id: "lock.polycontrol_danalock_v3_btze_locked",
      state: "unlocked",
      attributes: {
        node_id: 28,
        value_index: 0,
        value_instance: 1,
        value_id: "72057594513489920",
        friendly_name: "Frontdoor",
      },
      last_changed: "2019-01-18T15:53:36.058341+00:00",
      last_updated: "2019-01-18T15:53:36.058341+00:00",
      context: { id: "e12f4a5ee7864b95bde4d5da1c8753b9", user_id: null },
    },
    "binary_sensor.front_door_sensor": {
      entity_id: "binary_sensor.front_door_sensor",
      state: "off",
      attributes: {
        battery_level: 100,
        on: true,
        friendly_name: "Frontdoor sensor",
        device_class: "opening",
        icon: "mdi:door",
      },
      last_changed: "2019-01-18T16:03:19.907644+00:00",
      last_updated: "2019-01-18T16:03:19.907644+00:00",
      context: { id: "5c9724de70d249218710cd48d662383a", user_id: null },
    },
    "binary_sensor.altan_motion_sensor": {
      entity_id: "binary_sensor.altan_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 34,
        on: true,
        friendly_name: "altan_motion_sensor",
        device_class: "motion",
      },
      last_changed: "2019-01-18T16:02:09.208632+00:00",
      last_updated: "2019-01-18T16:02:09.208632+00:00",
      context: { id: "fa3835c018ab4f2caa5fc7a629765ce1", user_id: null },
    },
    "binary_sensor.back_door_sensor": {
      entity_id: "binary_sensor.back_door_sensor",
      state: "off",
      attributes: {
        battery_level: 88,
        on: true,
        friendly_name: "Altand\u00f6rren sensor",
        device_class: "opening",
        icon: "mdi:door",
      },
      last_changed: "2019-01-18T16:02:09.221573+00:00",
      last_updated: "2019-01-18T16:02:09.221573+00:00",
      context: { id: "79b24786327f402d98039fc7f64a5cac", user_id: null },
    },
    "binary_sensor.badrumssensor": {
      entity_id: "binary_sensor.badrumssensor",
      state: "off",
      attributes: {
        battery_level: 74,
        on: true,
        friendly_name: "badrumssensor",
        device_class: "motion",
      },
      last_changed: "2019-01-18T16:02:09.230201+00:00",
      last_updated: "2019-01-18T16:02:09.230201+00:00",
      context: { id: "d717171f27ac4788baf5a01aa76103cb", user_id: null },
    },
    "binary_sensor.trapp_motion_sensor": {
      entity_id: "binary_sensor.trapp_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 47,
        on: true,
        dark: true,
        friendly_name: "R\u00f6relsesensor k\u00e4llaren 1",
        device_class: "motion",
        icon: "mdi:walk",
      },
      last_changed: "2019-01-18T16:05:22.880965+00:00",
      last_updated: "2019-01-18T16:05:22.880965+00:00",
      context: { id: "930f8a9f68044b9e9081d446bac41dec", user_id: null },
    },
    "binary_sensor.tvattstugan_motion_sensor": {
      entity_id: "binary_sensor.tvattstugan_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 60,
        on: true,
        dark: true,
        friendly_name: "R\u00f6relsesensor tv\u00e4ttstugan",
        device_class: "motion",
        icon: "mdi:walk",
      },
      last_changed: "2019-01-18T16:05:18.681492+00:00",
      last_updated: "2019-01-18T16:05:18.681492+00:00",
      context: { id: "5203da025f024e6fa3f23d51e49a6792", user_id: null },
    },
    "binary_sensor.dorrklockan": {
      entity_id: "binary_sensor.dorrklockan",
      state: "on",
      attributes: {
        battery_level: 100,
        on: true,
        friendly_name: "Doorbell",
        device_class: "opening",
        icon: "mdi:bell",
      },
      last_changed: "2019-01-18T16:03:12.046042+00:00",
      last_updated: "2019-01-18T16:03:12.046042+00:00",
      context: { id: "fdfdad57b15c456687f610a65e3ef4cb", user_id: null },
    },
    "binary_sensor.skafferiet_motion_sensor": {
      entity_id: "binary_sensor.skafferiet_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 60,
        on: true,
        friendly_name: "R\u00f6relsesensor skafferiet",
        device_class: "motion",
        icon: "mdi:walk",
      },
      last_changed: "2019-01-18T16:02:09.287461+00:00",
      last_updated: "2019-01-18T16:02:09.287461+00:00",
      context: { id: "51facd375f354ae5aef8c343d6e76290", user_id: null },
    },
    "binary_sensor.kallaren_motion_sensor": {
      entity_id: "binary_sensor.kallaren_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 60,
        on: true,
        dark: true,
        friendly_name: "R\u00f6relsesensor k\u00e4llaren 2",
        device_class: "motion",
        icon: "mdi:walk",
      },
      last_changed: "2019-01-18T16:05:17.181070+00:00",
      last_updated: "2019-01-18T16:05:17.181070+00:00",
      context: { id: "56df28bb79234daba64d61ae7daf0f54", user_id: null },
    },
    "binary_sensor.banksensor": {
      entity_id: "binary_sensor.banksensor",
      state: "on",
      attributes: {
        battery_level: 47,
        on: true,
        dark: true,
        friendly_name: "B\u00e4nksensor",
        device_class: "motion",
      },
      last_changed: "2019-01-18T16:05:03.828041+00:00",
      last_updated: "2019-01-18T16:05:03.828041+00:00",
      context: { id: "a270883993b04d90bee5c27180c43cb8", user_id: null },
    },
  });
