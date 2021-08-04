export interface NetboxResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

export interface Aggregate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Family
   */
  readonly family?: {
    label: "IPv4" | "IPv6";
    value: 4 | 6;
  };
  /**
   * Prefix
   */
  prefix: string;
  rir: NestedRIR;
  tenant?: NestedTenant;
  /**
   * Date added
   */
  date_added?: string; // date
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface AvailableIP {
  /**
   * Family
   */
  readonly family?: number;
  /**
   * Address
   */
  readonly address?: string;
  vrf?: NestedVRF;
}
export interface AvailablePrefix {
  /**
   * Family
   */
  readonly family?: number;
  /**
   * Prefix
   */
  readonly prefix?: string;
  vrf?: NestedVRF;
}
export interface Cable {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Termination a type
   */
  termination_a_type: string;
  /**
   * Termination a id
   */
  termination_a_id: number;
  /**
   * Termination a
   */
  readonly termination_a?: {
    [name: string]: string;
  };
  /**
   * Termination b type
   */
  termination_b_type: string;
  /**
   * Termination b id
   */
  termination_b_id: number;
  /**
   * Termination b
   */
  readonly termination_b?: {
    [name: string]: string;
  };
  /**
   * Type
   */
  type?:
    | "cat3"
    | "cat5"
    | "cat5e"
    | "cat6"
    | "cat6a"
    | "cat7"
    | "cat7a"
    | "cat8"
    | "dac-active"
    | "dac-passive"
    | "mrj21-trunk"
    | "coaxial"
    | "mmf"
    | "mmf-om1"
    | "mmf-om2"
    | "mmf-om3"
    | "mmf-om4"
    | "mmf-om5"
    | "smf"
    | "smf-os1"
    | "smf-os2"
    | "aoc"
    | "power";
  /**
   * Status
   */
  status?: {
    label: "Connected" | "Planned" | "Decommissioning";
    value: "connected" | "planned" | "decommissioning";
  };
  /**
   * Label
   */
  label?: string;
  /**
   * Color
   */
  color?: string; // ^[0-9a-f]{6}$
  /**
   * Length
   */
  length?: number;
  /**
   * Length unit
   */
  length_unit?: {
    label: "Meters" | "Centimeters" | "Feet" | "Inches";
    value: "m" | "cm" | "ft" | "in";
  };
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
}
export interface Circuit {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Circuit ID
   */
  cid: string;
  provider: NestedProvider;
  type: NestedCircuitType;
  /**
   * Status
   */
  status?: {
    label:
      | "Planned"
      | "Provisioning"
      | "Active"
      | "Offline"
      | "Deprovisioning"
      | "Decommissioned";
    value:
      | "planned"
      | "provisioning"
      | "active"
      | "offline"
      | "deprovisioning"
      | "decommissioned";
  };
  tenant?: NestedTenant;
  /**
   * Date installed
   */
  install_date?: string; // date
  /**
   * Commit rate (Kbps)
   */
  commit_rate?: number;
  /**
   * Description
   */
  description?: string;
  termination_a?: CircuitCircuitTermination;
  termination_z?: CircuitCircuitTermination;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface CircuitCircuitTermination {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  site: NestedSite;
  provider_network: NestedProviderNetwork;
  /**
   * Port speed (Kbps)
   */
  port_speed?: number;
  /**
   * Upstream speed (Kbps)
   * Upstream speed, if different from port speed
   */
  upstream_speed?: number;
  /**
   * Cross-connect ID
   */
  xconnect_id?: string;
}
export interface CircuitTermination {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  circuit: NestedCircuit;
  /**
   * Termination
   */
  term_side: "A" | "Z";
  site?: NestedSite;
  provider_network?: NestedProviderNetwork;
  /**
   * Port speed (Kbps)
   */
  port_speed?: number;
  /**
   * Upstream speed (Kbps)
   * Upstream speed, if different from port speed
   */
  upstream_speed?: number;
  /**
   * Cross-connect ID
   */
  xconnect_id?: string;
  /**
   * Patch panel/port(s)
   */
  pp_info?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface CircuitType {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Circuit count
   */
  readonly circuit_count?: number;
}
export interface CircuitsCircuitTerminations {
  id?: string;
  term_side?: string;
  port_speed?: string;
  upstream_speed?: string;
  xconnect_id?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  cabled?: string;
  q?: string;
  circuit_id?: string;
  site_id?: string;
  site?: string;
  provider_network_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  term_side__n?: string;
  port_speed__n?: string;
  port_speed__lte?: string;
  port_speed__lt?: string;
  port_speed__gte?: string;
  port_speed__gt?: string;
  upstream_speed__n?: string;
  upstream_speed__lte?: string;
  upstream_speed__lt?: string;
  upstream_speed__gte?: string;
  upstream_speed__gt?: string;
  xconnect_id__n?: string;
  xconnect_id__ic?: string;
  xconnect_id__nic?: string;
  xconnect_id__iew?: string;
  xconnect_id__niew?: string;
  xconnect_id__isw?: string;
  xconnect_id__nisw?: string;
  xconnect_id__ie?: string;
  xconnect_id__nie?: string;
  xconnect_id__empty?: string;
  circuit_id__n?: string;
  site_id__n?: string;
  site__n?: string;
  provider_network_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface CircuitsCircuitTypes {
  id?: string;
  name?: string;
  slug?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  limit?: number;
  offset?: number;
}
export interface CircuitsCircuits {
  id?: string;
  cid?: string;
  install_date?: string;
  commit_rate?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  provider_id?: string;
  provider?: string;
  provider_network_id?: string;
  type_id?: string;
  type?: string;
  status?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  cid__n?: string;
  cid__ic?: string;
  cid__nic?: string;
  cid__iew?: string;
  cid__niew?: string;
  cid__isw?: string;
  cid__nisw?: string;
  cid__ie?: string;
  cid__nie?: string;
  cid__empty?: string;
  install_date__n?: string;
  install_date__lte?: string;
  install_date__lt?: string;
  install_date__gte?: string;
  install_date__gt?: string;
  commit_rate__n?: string;
  commit_rate__lte?: string;
  commit_rate__lt?: string;
  commit_rate__gte?: string;
  commit_rate__gt?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  provider_id__n?: string;
  provider__n?: string;
  provider_network_id__n?: string;
  type_id__n?: string;
  type__n?: string;
  status__n?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface CircuitsProviderNetworks {
  id?: string;
  name?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  provider_id?: string;
  provider?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  provider_id__n?: string;
  provider__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface CircuitsProviders {
  id?: string;
  name?: string;
  slug?: string;
  asn?: string;
  account?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  asn__n?: string;
  asn__lte?: string;
  asn__lt?: string;
  asn__gte?: string;
  asn__gt?: string;
  account__n?: string;
  account__ic?: string;
  account__nic?: string;
  account__iew?: string;
  account__niew?: string;
  account__isw?: string;
  account__nisw?: string;
  account__ie?: string;
  account__nie?: string;
  account__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface Cluster {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  type: NestedClusterType;
  group?: NestedClusterGroup;
  tenant?: NestedTenant;
  site?: NestedSite;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
}
export interface ClusterGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Cluster count
   */
  readonly cluster_count?: number;
}
export interface ClusterType {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Cluster count
   */
  readonly cluster_count?: number;
}
export interface ConfigContext {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Weight
   */
  weight?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Is active
   */
  is_active?: boolean;
  regions?: NestedRegion[];
  site_groups?: NestedSiteGroup[];
  sites?: NestedSite[];
  device_types?: NestedDeviceType[];
  roles?: NestedDeviceRole[];
  platforms?: NestedPlatform[];
  cluster_groups?: NestedClusterGroup[];
  clusters?: NestedCluster[];
  tenant_groups?: NestedTenantGroup[];
  tenants?: NestedTenant[];
  tags?: string /* slug ^[-a-zA-Z0-9_]+$ */[];
  /**
   * Data
   */
  data: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface ConsolePort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "DE-9"
      | "DB-25"
      | "RJ-11"
      | "RJ-12"
      | "RJ-45"
      | "USB Type A"
      | "USB Type B"
      | "USB Type C"
      | "USB Mini A"
      | "USB Mini B"
      | "USB Micro A"
      | "USB Micro B"
      | "Other";
    value:
      | "de-9"
      | "db-25"
      | "rj-11"
      | "rj-12"
      | "rj-45"
      | "usb-a"
      | "usb-b"
      | "usb-c"
      | "usb-mini-a"
      | "usb-mini-b"
      | "usb-micro-a"
      | "usb-micro-b"
      | "other";
  };
  /**
   * Speed
   */
  speed?: {
    label:
      | "1200 bps"
      | "2400 bps"
      | "4800 bps"
      | "9600 bps"
      | "19.2 kbps"
      | "38.4 kbps"
      | "57.6 kbps"
      | "115.2 kbps";
    value: 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200;
  };
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface ConsolePortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device_type: NestedDeviceType;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "DE-9"
      | "DB-25"
      | "RJ-11"
      | "RJ-12"
      | "RJ-45"
      | "USB Type A"
      | "USB Type B"
      | "USB Type C"
      | "USB Mini A"
      | "USB Mini B"
      | "USB Micro A"
      | "USB Micro B"
      | "Other";
    value:
      | "de-9"
      | "db-25"
      | "rj-11"
      | "rj-12"
      | "rj-45"
      | "usb-a"
      | "usb-b"
      | "usb-c"
      | "usb-mini-a"
      | "usb-mini-b"
      | "usb-micro-a"
      | "usb-micro-b"
      | "other";
  };
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface ConsoleServerPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "DE-9"
      | "DB-25"
      | "RJ-11"
      | "RJ-12"
      | "RJ-45"
      | "USB Type A"
      | "USB Type B"
      | "USB Type C"
      | "USB Mini A"
      | "USB Mini B"
      | "USB Micro A"
      | "USB Micro B"
      | "Other";
    value:
      | "de-9"
      | "db-25"
      | "rj-11"
      | "rj-12"
      | "rj-45"
      | "usb-a"
      | "usb-b"
      | "usb-c"
      | "usb-mini-a"
      | "usb-mini-b"
      | "usb-micro-a"
      | "usb-micro-b"
      | "other";
  };
  /**
   * Speed
   */
  speed?: {
    label:
      | "1200 bps"
      | "2400 bps"
      | "4800 bps"
      | "9600 bps"
      | "19.2 kbps"
      | "38.4 kbps"
      | "57.6 kbps"
      | "115.2 kbps";
    value: 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200;
  };
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface ConsoleServerPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device_type: NestedDeviceType;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "DE-9"
      | "DB-25"
      | "RJ-11"
      | "RJ-12"
      | "RJ-45"
      | "USB Type A"
      | "USB Type B"
      | "USB Type C"
      | "USB Mini A"
      | "USB Mini B"
      | "USB Micro A"
      | "USB Micro B"
      | "Other";
    value:
      | "de-9"
      | "db-25"
      | "rj-11"
      | "rj-12"
      | "rj-45"
      | "usb-a"
      | "usb-b"
      | "usb-c"
      | "usb-mini-a"
      | "usb-mini-b"
      | "usb-micro-a"
      | "usb-micro-b"
      | "other";
  };
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface ContentType {
  /**
   * ID
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * App label
   */
  app_label: string;
  /**
   * Python model class name
   */
  model: string;
  /**
   * Display name
   */
  readonly display_name?: string;
}
export interface CustomField {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  content_types: string[];
  /**
   * Type
   */
  type: {
    label:
      | "Text"
      | "Integer"
      | "Boolean (true/false)"
      | "Date"
      | "URL"
      | "Selection"
      | "Multiple selection";
    value:
      | "text"
      | "integer"
      | "boolean"
      | "date"
      | "url"
      | "select"
      | "multiselect";
  };
  /**
   * Name
   * Internal field name
   */
  name: string;
  /**
   * Label
   * Name of the field as displayed to users (if not provided, the field's name will be used)
   */
  label?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Required
   * If true, this field is required when creating new objects or editing an existing object.
   */
  required?: boolean;
  /**
   * Filter logic
   */
  filter_logic?: {
    label: "Disabled" | "Loose" | "Exact";
    value: "disabled" | "loose" | "exact";
  };
  /**
   * Default
   * Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. "Foo").
   */
  default?: string;
  /**
   * Weight
   * Fields with higher weights appear lower in a form.
   */
  weight?: number;
  /**
   * Minimum value
   * Minimum allowed value (for numeric fields)
   */
  validation_minimum?: number;
  /**
   * Maximum value
   * Maximum allowed value (for numeric fields)
   */
  validation_maximum?: number;
  /**
   * Validation regex
   * Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.
   */
  validation_regex?: string;
  /**
   * Comma-separated list of available choices (for selection fields)
   */
  choices?: string[];
}
export interface CustomLink {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Content type
   */
  content_type: string;
  /**
   * Name
   */
  name: string;
  /**
   * Link text
   * Jinja2 template code for link text
   */
  link_text: string;
  /**
   * Link URL
   * Jinja2 template code for link URL
   */
  link_url: string;
  /**
   * Weight
   */
  weight?: number;
  /**
   * Group name
   * Links with the same group will appear as a dropdown menu
   */
  group_name?: string;
  /**
   * Button class
   * The class of the first link in a group will be used for the dropdown button
   */
  button_class?:
    | "default"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "link";
  /**
   * New window
   * Force link to open in a new window
   */
  new_window?: boolean;
}
export interface DcimCables {
  id?: string;
  label?: string;
  length?: string;
  length_unit?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  type?: string;
  status?: string;
  color?: string;
  device_id?: string;
  device?: string;
  rack_id?: string;
  rack?: string;
  site_id?: string;
  site?: string;
  tenant_id?: string;
  tenant?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  length__n?: string;
  length__lte?: string;
  length__lt?: string;
  length__gte?: string;
  length__gt?: string;
  length_unit__n?: string;
  type__n?: string;
  status__n?: string;
  color__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimConnectedDevice {
  peer_device: string;
  peer_interface: string;
}
export interface DcimConsoleConnections {
  name?: string;
  site?: string;
  device_id?: string;
  device?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  limit?: number;
  offset?: number;
}
export interface DcimConsolePortTemplates {
  id?: string;
  name?: string;
  type?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  devicetype_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  type__n?: string;
  devicetype_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimConsolePorts {
  id?: string;
  name?: string;
  label?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  cabled?: string;
  connected?: string;
  type?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_id__n?: string;
  device__n?: string;
  tag__n?: string;
  type__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimConsoleServerPortTemplates {
  id?: string;
  name?: string;
  type?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  devicetype_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  type__n?: string;
  devicetype_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimConsoleServerPorts {
  id?: string;
  name?: string;
  label?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  cabled?: string;
  connected?: string;
  type?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_id__n?: string;
  device__n?: string;
  tag__n?: string;
  type__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimDeviceBayTemplates {
  id?: string;
  name?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  devicetype_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  devicetype_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimDeviceBays {
  id?: string;
  name?: string;
  label?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_id__n?: string;
  device__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimDeviceRoles {
  id?: string;
  name?: string;
  slug?: string;
  color?: string;
  vm_role?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  color__n?: string;
  color__ic?: string;
  color__nic?: string;
  color__iew?: string;
  color__niew?: string;
  color__isw?: string;
  color__nisw?: string;
  color__ie?: string;
  color__nie?: string;
  color__empty?: string;
  limit?: number;
  offset?: number;
}
export interface DcimDeviceTypes {
  id?: string;
  model?: string;
  slug?: string;
  part_number?: string;
  u_height?: string;
  is_full_depth?: string;
  subdevice_role?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  manufacturer_id?: string;
  manufacturer?: string;
  console_ports?: string;
  console_server_ports?: string;
  power_ports?: string;
  power_outlets?: string;
  interfaces?: string;
  pass_through_ports?: string;
  device_bays?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  model__n?: string;
  model__ic?: string;
  model__nic?: string;
  model__iew?: string;
  model__niew?: string;
  model__isw?: string;
  model__nisw?: string;
  model__ie?: string;
  model__nie?: string;
  model__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  part_number__n?: string;
  part_number__ic?: string;
  part_number__nic?: string;
  part_number__iew?: string;
  part_number__niew?: string;
  part_number__isw?: string;
  part_number__nisw?: string;
  part_number__ie?: string;
  part_number__nie?: string;
  part_number__empty?: string;
  u_height__n?: string;
  u_height__lte?: string;
  u_height__lt?: string;
  u_height__gte?: string;
  u_height__gt?: string;
  subdevice_role__n?: string;
  manufacturer_id__n?: string;
  manufacturer__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimDevices {
  id?: string;
  name?: string;
  asset_tag?: string;
  face?: string;
  position?: string;
  vc_position?: string;
  vc_priority?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  local_context_data?: string;
  q?: string;
  manufacturer_id?: string;
  manufacturer?: string;
  device_type_id?: string;
  role_id?: string;
  role?: string;
  platform_id?: string;
  platform?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  location_id?: string;
  rack_id?: string;
  cluster_id?: string;
  model?: string;
  status?: string;
  is_full_depth?: string;
  mac_address?: string;
  serial?: string;
  has_primary_ip?: string;
  virtual_chassis_id?: string;
  virtual_chassis_member?: string;
  console_ports?: string;
  console_server_ports?: string;
  power_ports?: string;
  power_outlets?: string;
  interfaces?: string;
  pass_through_ports?: string;
  device_bays?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  asset_tag__n?: string;
  asset_tag__ic?: string;
  asset_tag__nic?: string;
  asset_tag__iew?: string;
  asset_tag__niew?: string;
  asset_tag__isw?: string;
  asset_tag__nisw?: string;
  asset_tag__ie?: string;
  asset_tag__nie?: string;
  asset_tag__empty?: string;
  face__n?: string;
  position__n?: string;
  position__lte?: string;
  position__lt?: string;
  position__gte?: string;
  position__gt?: string;
  vc_position__n?: string;
  vc_position__lte?: string;
  vc_position__lt?: string;
  vc_position__gte?: string;
  vc_position__gt?: string;
  vc_priority__n?: string;
  vc_priority__lte?: string;
  vc_priority__lt?: string;
  vc_priority__gte?: string;
  vc_priority__gt?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  manufacturer_id__n?: string;
  manufacturer__n?: string;
  device_type_id__n?: string;
  role_id__n?: string;
  role__n?: string;
  platform_id__n?: string;
  platform__n?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  location_id__n?: string;
  rack_id__n?: string;
  cluster_id__n?: string;
  model__n?: string;
  status__n?: string;
  mac_address__n?: string;
  mac_address__ic?: string;
  mac_address__nic?: string;
  mac_address__iew?: string;
  mac_address__niew?: string;
  mac_address__isw?: string;
  mac_address__nisw?: string;
  mac_address__ie?: string;
  mac_address__nie?: string;
  virtual_chassis_id__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
namespace DcimDevices {
  export interface Napalm {
    method: string;
  }
}
export interface DcimFrontPortTemplates {
  id?: string;
  name?: string;
  type?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  devicetype_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  type__n?: string;
  devicetype_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimFrontPorts {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  cabled?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  type__n?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_id__n?: string;
  device__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimInterfaceConnections {
  site?: string;
  device_id?: string;
  device?: string;
  limit?: number;
  offset?: number;
}
export interface DcimInterfaceTemplates {
  id?: string;
  name?: string;
  type?: string;
  mgmt_only?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  devicetype_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  type__n?: string;
  devicetype_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimInterfaces {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  enabled?: string;
  mtu?: string;
  mgmt_only?: string;
  mode?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  cabled?: string;
  connected?: string;
  kind?: string;
  parent_id?: string;
  lag_id?: string;
  mac_address?: string;
  vlan_id?: string;
  vlan?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  type__n?: string;
  mtu__n?: string;
  mtu__lte?: string;
  mtu__lt?: string;
  mtu__gte?: string;
  mtu__gt?: string;
  mode__n?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  tag__n?: string;
  parent_id__n?: string;
  lag_id__n?: string;
  mac_address__n?: string;
  mac_address__ic?: string;
  mac_address__nic?: string;
  mac_address__iew?: string;
  mac_address__niew?: string;
  mac_address__isw?: string;
  mac_address__nisw?: string;
  mac_address__ie?: string;
  mac_address__nie?: string;
  limit?: number;
  offset?: number;
}
export interface DcimInventoryItems {
  id?: string;
  name?: string;
  label?: string;
  part_id?: string;
  asset_tag?: string;
  discovered?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  parent_id?: string;
  manufacturer_id?: string;
  manufacturer?: string;
  serial?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  part_id__n?: string;
  part_id__ic?: string;
  part_id__nic?: string;
  part_id__iew?: string;
  part_id__niew?: string;
  part_id__isw?: string;
  part_id__nisw?: string;
  part_id__ie?: string;
  part_id__nie?: string;
  part_id__empty?: string;
  asset_tag__n?: string;
  asset_tag__ic?: string;
  asset_tag__nic?: string;
  asset_tag__iew?: string;
  asset_tag__niew?: string;
  asset_tag__isw?: string;
  asset_tag__nisw?: string;
  asset_tag__ie?: string;
  asset_tag__nie?: string;
  asset_tag__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_id__n?: string;
  device__n?: string;
  tag__n?: string;
  parent_id__n?: string;
  manufacturer_id__n?: string;
  manufacturer__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimLocations {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  parent_id?: string;
  parent?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  parent_id__n?: string;
  parent__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimManufacturers {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  limit?: number;
  offset?: number;
}
export interface DcimPlatforms {
  id?: string;
  name?: string;
  slug?: string;
  napalm_driver?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  manufacturer_id?: string;
  manufacturer?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  napalm_driver__n?: string;
  napalm_driver__ic?: string;
  napalm_driver__nic?: string;
  napalm_driver__iew?: string;
  napalm_driver__niew?: string;
  napalm_driver__isw?: string;
  napalm_driver__nisw?: string;
  napalm_driver__ie?: string;
  napalm_driver__nie?: string;
  napalm_driver__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  manufacturer_id__n?: string;
  manufacturer__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimPowerConnections {
  name?: string;
  site?: string;
  device_id?: string;
  device?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  limit?: number;
  offset?: number;
}
export interface DcimPowerFeeds {
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  supply?: string;
  phase?: string;
  voltage?: string;
  amperage?: string;
  max_utilization?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  cabled?: string;
  connected?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  power_panel_id?: string;
  rack_id?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  status__n?: string;
  type__n?: string;
  supply__n?: string;
  phase__n?: string;
  voltage__n?: string;
  voltage__lte?: string;
  voltage__lt?: string;
  voltage__gte?: string;
  voltage__gt?: string;
  amperage__n?: string;
  amperage__lte?: string;
  amperage__lt?: string;
  amperage__gte?: string;
  amperage__gt?: string;
  max_utilization__n?: string;
  max_utilization__lte?: string;
  max_utilization__lt?: string;
  max_utilization__gte?: string;
  max_utilization__gt?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  power_panel_id__n?: string;
  rack_id__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimPowerOutletTemplates {
  id?: string;
  name?: string;
  type?: string;
  feed_leg?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  devicetype_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  type__n?: string;
  feed_leg__n?: string;
  devicetype_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimPowerOutlets {
  id?: string;
  name?: string;
  label?: string;
  feed_leg?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  cabled?: string;
  connected?: string;
  type?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  feed_leg__n?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_id__n?: string;
  device__n?: string;
  tag__n?: string;
  type__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimPowerPanels {
  id?: string;
  name?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  location_id?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  location_id__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimPowerPortTemplates {
  id?: string;
  name?: string;
  type?: string;
  maximum_draw?: string;
  allocated_draw?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  devicetype_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  type__n?: string;
  maximum_draw__n?: string;
  maximum_draw__lte?: string;
  maximum_draw__lt?: string;
  maximum_draw__gte?: string;
  maximum_draw__gt?: string;
  allocated_draw__n?: string;
  allocated_draw__lte?: string;
  allocated_draw__lt?: string;
  allocated_draw__gte?: string;
  allocated_draw__gt?: string;
  devicetype_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimPowerPorts {
  id?: string;
  name?: string;
  label?: string;
  maximum_draw?: string;
  allocated_draw?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  cabled?: string;
  connected?: string;
  type?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  maximum_draw__n?: string;
  maximum_draw__lte?: string;
  maximum_draw__lt?: string;
  maximum_draw__gte?: string;
  maximum_draw__gt?: string;
  allocated_draw__n?: string;
  allocated_draw__lte?: string;
  allocated_draw__lt?: string;
  allocated_draw__gte?: string;
  allocated_draw__gt?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_id__n?: string;
  device__n?: string;
  tag__n?: string;
  type__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimRackReservations {
  id?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  rack_id?: string;
  site_id?: string;
  site?: string;
  location_id?: string;
  location?: string;
  user_id?: string;
  user?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  rack_id__n?: string;
  site_id__n?: string;
  site__n?: string;
  location_id__n?: string;
  location__n?: string;
  user_id__n?: string;
  user__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimRackRoles {
  id?: string;
  name?: string;
  slug?: string;
  color?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  color__n?: string;
  color__ic?: string;
  color__nic?: string;
  color__iew?: string;
  color__niew?: string;
  color__isw?: string;
  color__nisw?: string;
  color__ie?: string;
  color__nie?: string;
  color__empty?: string;
  limit?: number;
  offset?: number;
}
export interface DcimRacks {
  id?: string;
  name?: string;
  facility_id?: string;
  asset_tag?: string;
  u_height?: string;
  desc_units?: string;
  outer_width?: string;
  outer_depth?: string;
  outer_unit?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  location_id?: string;
  location?: string;
  status?: string;
  type?: string;
  width?: string;
  role_id?: string;
  role?: string;
  serial?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  facility_id__n?: string;
  facility_id__ic?: string;
  facility_id__nic?: string;
  facility_id__iew?: string;
  facility_id__niew?: string;
  facility_id__isw?: string;
  facility_id__nisw?: string;
  facility_id__ie?: string;
  facility_id__nie?: string;
  facility_id__empty?: string;
  asset_tag__n?: string;
  asset_tag__ic?: string;
  asset_tag__nic?: string;
  asset_tag__iew?: string;
  asset_tag__niew?: string;
  asset_tag__isw?: string;
  asset_tag__nisw?: string;
  asset_tag__ie?: string;
  asset_tag__nie?: string;
  asset_tag__empty?: string;
  u_height__n?: string;
  u_height__lte?: string;
  u_height__lt?: string;
  u_height__gte?: string;
  u_height__gt?: string;
  outer_width__n?: string;
  outer_width__lte?: string;
  outer_width__lt?: string;
  outer_width__gte?: string;
  outer_width__gt?: string;
  outer_depth__n?: string;
  outer_depth__lte?: string;
  outer_depth__lt?: string;
  outer_depth__gte?: string;
  outer_depth__gt?: string;
  outer_unit__n?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  location_id__n?: string;
  location__n?: string;
  status__n?: string;
  type__n?: string;
  width__n?: string;
  role_id__n?: string;
  role__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
namespace DcimRacks {
  export interface Elevation {
    q?: string;
    face?: "front" | "rear";
    render?: "json" | "svg";
    unit_width?: number;
    unit_height?: number;
    legend_width?: number;
    exclude?: number;
    expand_devices?: boolean;
    include_images?: boolean;
  }
}
export interface DcimRearPortTemplates {
  id?: string;
  name?: string;
  type?: string;
  positions?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  devicetype_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  type__n?: string;
  positions__n?: string;
  positions__lte?: string;
  positions__lt?: string;
  positions__gte?: string;
  positions__gt?: string;
  devicetype_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimRearPorts {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  positions?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  device_id?: string;
  device?: string;
  tag?: string;
  cabled?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  label__n?: string;
  label__ic?: string;
  label__nic?: string;
  label__iew?: string;
  label__niew?: string;
  label__isw?: string;
  label__nisw?: string;
  label__ie?: string;
  label__nie?: string;
  label__empty?: string;
  type__n?: string;
  positions__n?: string;
  positions__lte?: string;
  positions__lt?: string;
  positions__gte?: string;
  positions__gt?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_id__n?: string;
  device__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimRegions {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  parent_id?: string;
  parent?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  parent_id__n?: string;
  parent__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimSiteGroups {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  parent_id?: string;
  parent?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  parent_id__n?: string;
  parent__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimSites {
  id?: string;
  name?: string;
  slug?: string;
  facility?: string;
  asn?: string;
  latitude?: string;
  longitude?: string;
  contact_name?: string;
  contact_phone?: string;
  contact_email?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  status?: string;
  region_id?: string;
  region?: string;
  group_id?: string;
  group?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  facility__n?: string;
  facility__ic?: string;
  facility__nic?: string;
  facility__iew?: string;
  facility__niew?: string;
  facility__isw?: string;
  facility__nisw?: string;
  facility__ie?: string;
  facility__nie?: string;
  facility__empty?: string;
  asn__n?: string;
  asn__lte?: string;
  asn__lt?: string;
  asn__gte?: string;
  asn__gt?: string;
  latitude__n?: string;
  latitude__lte?: string;
  latitude__lt?: string;
  latitude__gte?: string;
  latitude__gt?: string;
  longitude__n?: string;
  longitude__lte?: string;
  longitude__lt?: string;
  longitude__gte?: string;
  longitude__gt?: string;
  contact_name__n?: string;
  contact_name__ic?: string;
  contact_name__nic?: string;
  contact_name__iew?: string;
  contact_name__niew?: string;
  contact_name__isw?: string;
  contact_name__nisw?: string;
  contact_name__ie?: string;
  contact_name__nie?: string;
  contact_name__empty?: string;
  contact_phone__n?: string;
  contact_phone__ic?: string;
  contact_phone__nic?: string;
  contact_phone__iew?: string;
  contact_phone__niew?: string;
  contact_phone__isw?: string;
  contact_phone__nisw?: string;
  contact_phone__ie?: string;
  contact_phone__nie?: string;
  contact_phone__empty?: string;
  contact_email__n?: string;
  contact_email__ic?: string;
  contact_email__nic?: string;
  contact_email__iew?: string;
  contact_email__niew?: string;
  contact_email__isw?: string;
  contact_email__nisw?: string;
  contact_email__ie?: string;
  contact_email__nie?: string;
  contact_email__empty?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  status__n?: string;
  region_id__n?: string;
  region__n?: string;
  group_id__n?: string;
  group__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface DcimVirtualChassis {
  id?: string;
  domain?: string;
  name?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  master_id?: string;
  master?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  tenant_id?: string;
  tenant?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  domain__n?: string;
  domain__ic?: string;
  domain__nic?: string;
  domain__iew?: string;
  domain__niew?: string;
  domain__isw?: string;
  domain__nisw?: string;
  domain__ie?: string;
  domain__nie?: string;
  domain__empty?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  master_id__n?: string;
  master__n?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface Device {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name?: string;
  /**
   * Display name
   */
  readonly display_name?: string;
  device_type: NestedDeviceType;
  device_role: NestedDeviceRole;
  tenant?: NestedTenant;
  platform?: NestedPlatform;
  /**
   * Serial number
   */
  serial?: string;
  /**
   * Asset tag
   * A unique tag used to identify this device
   */
  asset_tag?: string;
  site: NestedSite;
  location?: NestedLocation;
  rack?: NestedRack;
  /**
   * Position (U)
   * The lowest-numbered unit occupied by the device
   */
  position?: number;
  /**
   * Face
   */
  face?: {
    label: "Front" | "Rear";
    value: "front" | "rear";
  };
  parent_device?: NestedDevice;
  /**
   * Status
   */
  status?: {
    label:
      | "Offline"
      | "Active"
      | "Planned"
      | "Staged"
      | "Failed"
      | "Inventory"
      | "Decommissioning";
    value:
      | "offline"
      | "active"
      | "planned"
      | "staged"
      | "failed"
      | "inventory"
      | "decommissioning";
  };
  primary_ip?: NestedIPAddress;
  primary_ip4?: NestedIPAddress;
  primary_ip6?: NestedIPAddress;
  cluster?: NestedCluster;
  virtual_chassis?: NestedVirtualChassis;
  /**
   * Vc position
   */
  vc_position?: number;
  /**
   * Vc priority
   */
  vc_priority?: number;
  /**
   * Comments
   */
  comments?: string;
  /**
   * Local context data
   */
  local_context_data?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface DeviceBay {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Description
   */
  description?: string;
  installed_device?: NestedDevice;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface DeviceBayTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device_type: NestedDeviceType;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface DeviceNAPALM {
  /**
   * Method
   */
  method: {
    [name: string]: string;
  };
}
export interface DeviceRole {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Color
   */
  color?: string; // ^[0-9a-f]{6}$
  /**
   * VM Role
   * Virtual machines may be assigned to this role
   */
  vm_role?: boolean;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
}
export interface DeviceType {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  manufacturer: NestedManufacturer;
  /**
   * Model
   */
  model: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Part number
   * Discrete part number (optional)
   */
  part_number?: string;
  /**
   * Height (U)
   */
  u_height?: number;
  /**
   * Is full depth
   * Device consumes both front and rear rack faces
   */
  is_full_depth?: boolean;
  /**
   * Subdevice role
   */
  subdevice_role?: {
    label: "Parent" | "Child";
    value: "parent" | "child";
  };
  /**
   * Front image
   */
  readonly front_image?: string; // uri
  /**
   * Rear image
   */
  readonly rear_image?: string; // uri
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
}
export interface DeviceWithConfigContext {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name?: string;
  /**
   * Display name
   */
  readonly display_name?: string;
  device_type: NestedDeviceType;
  device_role: NestedDeviceRole;
  tenant?: NestedTenant;
  platform?: NestedPlatform;
  /**
   * Serial number
   */
  serial?: string;
  /**
   * Asset tag
   * A unique tag used to identify this device
   */
  asset_tag?: string;
  site: NestedSite;
  location?: NestedLocation;
  rack?: NestedRack;
  /**
   * Position (U)
   * The lowest-numbered unit occupied by the device
   */
  position?: number;
  /**
   * Face
   */
  face?: {
    label: "Front" | "Rear";
    value: "front" | "rear";
  };
  parent_device?: NestedDevice;
  /**
   * Status
   */
  status?: {
    label:
      | "Offline"
      | "Active"
      | "Planned"
      | "Staged"
      | "Failed"
      | "Inventory"
      | "Decommissioning";
    value:
      | "offline"
      | "active"
      | "planned"
      | "staged"
      | "failed"
      | "inventory"
      | "decommissioning";
  };
  primary_ip?: NestedIPAddress;
  primary_ip4?: NestedIPAddress;
  primary_ip6?: NestedIPAddress;
  cluster?: NestedCluster;
  virtual_chassis?: NestedVirtualChassis;
  /**
   * Vc position
   */
  vc_position?: number;
  /**
   * Vc priority
   */
  vc_priority?: number;
  /**
   * Comments
   */
  comments?: string;
  /**
   * Local context data
   */
  local_context_data?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Config context
   */
  readonly config_context?: {
    [name: string]: string;
  };
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface ExportTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Content type
   */
  content_type: string;
  /**
   * Name
   */
  name: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Template code
   * The list of objects being exported is passed as a context variable named <code>queryset</code>.
   */
  template_code: string;
  /**
   * MIME type
   * Defaults to <code>text/plain</code>
   */
  mime_type?: string;
  /**
   * File extension
   * Extension to append to the rendered filename
   */
  file_extension?: string;
  /**
   * As attachment
   * Download file as attachment
   */
  as_attachment?: boolean;
}
export interface ExtrasConfigContexts {
  id?: string;
  name?: string;
  is_active?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group?: string;
  site_group_id?: string;
  site_id?: string;
  site?: string;
  device_type_id?: string;
  role_id?: string;
  role?: string;
  platform_id?: string;
  platform?: string;
  cluster_group_id?: string;
  cluster_group?: string;
  cluster_id?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  region_id__n?: string;
  region__n?: string;
  site_group__n?: string;
  site_group_id__n?: string;
  site_id__n?: string;
  site__n?: string;
  device_type_id__n?: string;
  role_id__n?: string;
  role__n?: string;
  platform_id__n?: string;
  platform__n?: string;
  cluster_group_id__n?: string;
  cluster_group__n?: string;
  cluster_id__n?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasContentTypes {
  id?: number;
  app_label?: string;
  model?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasCustomFields {
  id?: number;
  content_types?: string;
  name?: string;
  required?: string;
  filter_logic?: string;
  weight?: number;
  limit?: number;
  offset?: number;
}
export interface ExtrasCustomLinks {
  id?: string;
  content_type?: string;
  name?: string;
  link_text?: string;
  link_url?: string;
  weight?: string;
  group_name?: string;
  new_window?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  content_type__n?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  link_text__n?: string;
  link_text__ic?: string;
  link_text__nic?: string;
  link_text__iew?: string;
  link_text__niew?: string;
  link_text__isw?: string;
  link_text__nisw?: string;
  link_text__ie?: string;
  link_text__nie?: string;
  link_text__empty?: string;
  link_url__n?: string;
  link_url__ic?: string;
  link_url__nic?: string;
  link_url__iew?: string;
  link_url__niew?: string;
  link_url__isw?: string;
  link_url__nisw?: string;
  link_url__ie?: string;
  link_url__nie?: string;
  link_url__empty?: string;
  weight__n?: string;
  weight__lte?: string;
  weight__lt?: string;
  weight__gte?: string;
  weight__gt?: string;
  group_name__n?: string;
  group_name__ic?: string;
  group_name__nic?: string;
  group_name__iew?: string;
  group_name__niew?: string;
  group_name__isw?: string;
  group_name__nisw?: string;
  group_name__ie?: string;
  group_name__nie?: string;
  group_name__empty?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasExportTemplates {
  id?: string;
  content_type?: string;
  name?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  content_type__n?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasImageAttachments {
  id?: string;
  content_type_id?: string;
  object_id?: string;
  name?: string;
  created?: string;
  content_type?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  content_type_id__n?: string;
  object_id__n?: string;
  object_id__lte?: string;
  object_id__lt?: string;
  object_id__gte?: string;
  object_id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  content_type__n?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasJobResults {
  id?: string;
  created?: string;
  completed?: string;
  status?: string;
  user?: string;
  obj_type?: string;
  name?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  status__n?: string;
  user__n?: string;
  obj_type__n?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasJournalEntries {
  id?: string;
  assigned_object_type_id?: string;
  assigned_object_id?: string;
  created?: string;
  kind?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  assigned_object_type?: string;
  created_by_id?: string;
  created_by?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  assigned_object_type_id__n?: string;
  assigned_object_id__n?: string;
  assigned_object_id__lte?: string;
  assigned_object_id__lt?: string;
  assigned_object_id__gte?: string;
  assigned_object_id__gt?: string;
  kind__n?: string;
  assigned_object_type__n?: string;
  created_by_id__n?: string;
  created_by__n?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasObjectChanges {
  id?: string;
  user?: string;
  user_name?: string;
  request_id?: string;
  action?: string;
  changed_object_type_id?: string;
  changed_object_id?: string;
  object_repr?: string;
  q?: string;
  time?: string;
  changed_object_type?: string;
  user_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  user__n?: string;
  user_name__n?: string;
  user_name__ic?: string;
  user_name__nic?: string;
  user_name__iew?: string;
  user_name__niew?: string;
  user_name__isw?: string;
  user_name__nisw?: string;
  user_name__ie?: string;
  user_name__nie?: string;
  user_name__empty?: string;
  action__n?: string;
  changed_object_type_id__n?: string;
  changed_object_id__n?: string;
  changed_object_id__lte?: string;
  changed_object_id__lt?: string;
  changed_object_id__gte?: string;
  changed_object_id__gt?: string;
  object_repr__n?: string;
  object_repr__ic?: string;
  object_repr__nic?: string;
  object_repr__iew?: string;
  object_repr__niew?: string;
  object_repr__isw?: string;
  object_repr__nisw?: string;
  object_repr__ie?: string;
  object_repr__nie?: string;
  object_repr__empty?: string;
  changed_object_type__n?: string;
  user_id__n?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasTags {
  id?: string;
  name?: string;
  slug?: string;
  color?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  content_type?: string;
  content_type_id?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  color__n?: string;
  color__ic?: string;
  color__nic?: string;
  color__iew?: string;
  color__niew?: string;
  color__isw?: string;
  color__nisw?: string;
  color__ie?: string;
  color__nie?: string;
  color__empty?: string;
  limit?: number;
  offset?: number;
}
export interface ExtrasWebhooks {
  id?: string;
  content_types?: string;
  name?: string;
  type_create?: string;
  type_update?: string;
  type_delete?: string;
  payload_url?: string;
  enabled?: string;
  http_method?: string;
  http_content_type?: string;
  secret?: string;
  ssl_verification?: string;
  ca_file_path?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  content_types__n?: string;
  content_types__ic?: string;
  content_types__nic?: string;
  content_types__iew?: string;
  content_types__niew?: string;
  content_types__isw?: string;
  content_types__nisw?: string;
  content_types__ie?: string;
  content_types__nie?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  payload_url__n?: string;
  payload_url__ic?: string;
  payload_url__nic?: string;
  payload_url__iew?: string;
  payload_url__niew?: string;
  payload_url__isw?: string;
  payload_url__nisw?: string;
  payload_url__ie?: string;
  payload_url__nie?: string;
  payload_url__empty?: string;
  http_method__n?: string;
  http_content_type__n?: string;
  http_content_type__ic?: string;
  http_content_type__nic?: string;
  http_content_type__iew?: string;
  http_content_type__niew?: string;
  http_content_type__isw?: string;
  http_content_type__nisw?: string;
  http_content_type__ie?: string;
  http_content_type__nie?: string;
  http_content_type__empty?: string;
  secret__n?: string;
  secret__ic?: string;
  secret__nic?: string;
  secret__iew?: string;
  secret__niew?: string;
  secret__isw?: string;
  secret__nisw?: string;
  secret__ie?: string;
  secret__nie?: string;
  secret__empty?: string;
  ca_file_path__n?: string;
  ca_file_path__ic?: string;
  ca_file_path__nic?: string;
  ca_file_path__iew?: string;
  ca_file_path__niew?: string;
  ca_file_path__isw?: string;
  ca_file_path__nisw?: string;
  ca_file_path__ie?: string;
  ca_file_path__nie?: string;
  ca_file_path__empty?: string;
  limit?: number;
  offset?: number;
}
export interface FrontPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type: {
    label:
      | "8P8C"
      | "8P6C"
      | "8P4C"
      | "8P2C"
      | "6P6C"
      | "6P4C"
      | "6P2C"
      | "4P4C"
      | "4P2C"
      | "GG45"
      | "TERA 4P"
      | "TERA 2P"
      | "TERA 1P"
      | "110 Punch"
      | "BNC"
      | "F Connector"
      | "N Connector"
      | "MRJ21"
      | "FC"
      | "LC"
      | "LC/APC"
      | "LSH"
      | "LSH/APC"
      | "MPO"
      | "MTRJ"
      | "SC"
      | "SC/APC"
      | "ST"
      | "CS"
      | "SN"
      | "Splice";
    value:
      | "8p8c"
      | "8p6c"
      | "8p4c"
      | "8p2c"
      | "6p6c"
      | "6p4c"
      | "6p2c"
      | "4p4c"
      | "4p2c"
      | "gg45"
      | "tera-4p"
      | "tera-2p"
      | "tera-1p"
      | "110-punch"
      | "bnc"
      | "f"
      | "n"
      | "mrj21"
      | "fc"
      | "lc"
      | "lc-apc"
      | "lsh"
      | "lsh-apc"
      | "mpo"
      | "mtrj"
      | "sc"
      | "sc-apc"
      | "st"
      | "cs"
      | "sn"
      | "splice";
  };
  rear_port: FrontPortRearPort;
  /**
   * Rear port position
   */
  rear_port_position?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface FrontPortRearPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
}
export interface FrontPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device_type: NestedDeviceType;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type: {
    label:
      | "8P8C"
      | "8P6C"
      | "8P4C"
      | "8P2C"
      | "6P6C"
      | "6P4C"
      | "6P2C"
      | "4P4C"
      | "4P2C"
      | "GG45"
      | "TERA 4P"
      | "TERA 2P"
      | "TERA 1P"
      | "110 Punch"
      | "BNC"
      | "F Connector"
      | "N Connector"
      | "MRJ21"
      | "FC"
      | "LC"
      | "LC/APC"
      | "LSH"
      | "LSH/APC"
      | "MPO"
      | "MTRJ"
      | "SC"
      | "SC/APC"
      | "ST"
      | "CS"
      | "SN"
      | "Splice";
    value:
      | "8p8c"
      | "8p6c"
      | "8p4c"
      | "8p2c"
      | "6p6c"
      | "6p4c"
      | "6p2c"
      | "4p4c"
      | "4p2c"
      | "gg45"
      | "tera-4p"
      | "tera-2p"
      | "tera-1p"
      | "110-punch"
      | "bnc"
      | "f"
      | "n"
      | "mrj21"
      | "fc"
      | "lc"
      | "lc-apc"
      | "lsh"
      | "lsh-apc"
      | "mpo"
      | "mtrj"
      | "sc"
      | "sc-apc"
      | "st"
      | "cs"
      | "sn"
      | "splice";
  };
  rear_port: NestedRearPortTemplate;
  /**
   * Rear port position
   */
  rear_port_position?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface Group {
  /**
   * ID
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * User count
   */
  readonly user_count?: number;
}
export interface IPAddress {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Family
   */
  readonly family?: {
    label: "IPv4" | "IPv6";
    value: 4 | 6;
  };
  /**
   * Address
   * IPv4 or IPv6 address (with mask)
   */
  address: string;
  vrf?: NestedVRF;
  tenant?: NestedTenant;
  /**
   * Status
   */
  status?: {
    label: "Active" | "Reserved" | "Deprecated" | "DHCP" | "SLAAC";
    value: "active" | "reserved" | "deprecated" | "dhcp" | "slaac";
  };
  /**
   * Role
   */
  role?: {
    label:
      | "Loopback"
      | "Secondary"
      | "Anycast"
      | "VIP"
      | "VRRP"
      | "HSRP"
      | "GLBP"
      | "CARP";
    value:
      | "loopback"
      | "secondary"
      | "anycast"
      | "vip"
      | "vrrp"
      | "hsrp"
      | "glbp"
      | "carp";
  };
  /**
   * Assigned object type
   */
  assigned_object_type?: string;
  /**
   * Assigned object id
   */
  assigned_object_id?: number;
  /**
   * Assigned object
   */
  readonly assigned_object?: {
    [name: string]: string;
  };
  nat_inside?: NestedIPAddress;
  nat_outside?: NestedIPAddress;
  /**
   * DNS Name
   * Hostname or FQDN (not case-sensitive)
   */
  dns_name?: string; // ^[0-9A-Za-z._-]+$
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface ImageAttachment {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Content type
   */
  content_type: string;
  /**
   * Object id
   */
  object_id: number;
  /**
   * Parent
   */
  readonly parent?: {
    [name: string]: string;
  };
  /**
   * Name
   */
  name?: string;
  /**
   * Image
   */
  readonly image?: string; // uri
  /**
   * Image height
   */
  image_height: number;
  /**
   * Image width
   */
  image_width: number;
  /**
   * Created
   */
  readonly created?: string; // date-time
}
export interface Interface {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type: {
    label:
      | "Virtual"
      | "Link Aggregation Group (LAG)"
      | "100BASE-TX (10/100ME)"
      | "1000BASE-T (1GE)"
      | "2.5GBASE-T (2.5GE)"
      | "5GBASE-T (5GE)"
      | "10GBASE-T (10GE)"
      | "10GBASE-CX4 (10GE)"
      | "GBIC (1GE)"
      | "SFP (1GE)"
      | "SFP+ (10GE)"
      | "XFP (10GE)"
      | "XENPAK (10GE)"
      | "X2 (10GE)"
      | "SFP28 (25GE)"
      | "SFP56 (50GE)"
      | "QSFP+ (40GE)"
      | "QSFP28 (50GE)"
      | "CFP (100GE)"
      | "CFP2 (100GE)"
      | "CFP2 (200GE)"
      | "CFP4 (100GE)"
      | "Cisco CPAK (100GE)"
      | "QSFP28 (100GE)"
      | "QSFP56 (200GE)"
      | "QSFP-DD (400GE)"
      | "OSFP (400GE)"
      | "IEEE 802.11a"
      | "IEEE 802.11b/g"
      | "IEEE 802.11n"
      | "IEEE 802.11ac"
      | "IEEE 802.11ad"
      | "IEEE 802.11ax"
      | "GSM"
      | "CDMA"
      | "LTE"
      | "OC-3/STM-1"
      | "OC-12/STM-4"
      | "OC-48/STM-16"
      | "OC-192/STM-64"
      | "OC-768/STM-256"
      | "OC-1920/STM-640"
      | "OC-3840/STM-1234"
      | "SFP (1GFC)"
      | "SFP (2GFC)"
      | "SFP (4GFC)"
      | "SFP+ (8GFC)"
      | "SFP+ (16GFC)"
      | "SFP28 (32GFC)"
      | "QSFP+ (64GFC)"
      | "QSFP28 (128GFC)"
      | "SDR (2 Gbps)"
      | "DDR (4 Gbps)"
      | "QDR (8 Gbps)"
      | "FDR10 (10 Gbps)"
      | "FDR (13.5 Gbps)"
      | "EDR (25 Gbps)"
      | "HDR (50 Gbps)"
      | "NDR (100 Gbps)"
      | "XDR (250 Gbps)"
      | "T1 (1.544 Mbps)"
      | "E1 (2.048 Mbps)"
      | "T3 (45 Mbps)"
      | "E3 (34 Mbps)"
      | "Cisco StackWise"
      | "Cisco StackWise Plus"
      | "Cisco FlexStack"
      | "Cisco FlexStack Plus"
      | "Juniper VCP"
      | "Extreme SummitStack"
      | "Extreme SummitStack-128"
      | "Extreme SummitStack-256"
      | "Extreme SummitStack-512"
      | "Other";
    value:
      | "virtual"
      | "lag"
      | "100base-tx"
      | "1000base-t"
      | "2.5gbase-t"
      | "5gbase-t"
      | "10gbase-t"
      | "10gbase-cx4"
      | "1000base-x-gbic"
      | "1000base-x-sfp"
      | "10gbase-x-sfpp"
      | "10gbase-x-xfp"
      | "10gbase-x-xenpak"
      | "10gbase-x-x2"
      | "25gbase-x-sfp28"
      | "50gbase-x-sfp56"
      | "40gbase-x-qsfpp"
      | "50gbase-x-sfp28"
      | "100gbase-x-cfp"
      | "100gbase-x-cfp2"
      | "200gbase-x-cfp2"
      | "100gbase-x-cfp4"
      | "100gbase-x-cpak"
      | "100gbase-x-qsfp28"
      | "200gbase-x-qsfp56"
      | "400gbase-x-qsfpdd"
      | "400gbase-x-osfp"
      | "ieee802.11a"
      | "ieee802.11g"
      | "ieee802.11n"
      | "ieee802.11ac"
      | "ieee802.11ad"
      | "ieee802.11ax"
      | "gsm"
      | "cdma"
      | "lte"
      | "sonet-oc3"
      | "sonet-oc12"
      | "sonet-oc48"
      | "sonet-oc192"
      | "sonet-oc768"
      | "sonet-oc1920"
      | "sonet-oc3840"
      | "1gfc-sfp"
      | "2gfc-sfp"
      | "4gfc-sfp"
      | "8gfc-sfpp"
      | "16gfc-sfpp"
      | "32gfc-sfp28"
      | "64gfc-qsfpp"
      | "128gfc-sfp28"
      | "infiniband-sdr"
      | "infiniband-ddr"
      | "infiniband-qdr"
      | "infiniband-fdr10"
      | "infiniband-fdr"
      | "infiniband-edr"
      | "infiniband-hdr"
      | "infiniband-ndr"
      | "infiniband-xdr"
      | "t1"
      | "e1"
      | "t3"
      | "e3"
      | "cisco-stackwise"
      | "cisco-stackwise-plus"
      | "cisco-flexstack"
      | "cisco-flexstack-plus"
      | "juniper-vcp"
      | "extreme-summitstack"
      | "extreme-summitstack-128"
      | "extreme-summitstack-256"
      | "extreme-summitstack-512"
      | "other";
  };
  /**
   * Enabled
   */
  enabled?: boolean;
  parent?: NestedInterface;
  lag?: NestedInterface;
  /**
   * MTU
   */
  mtu?: number;
  /**
   * MAC Address
   */
  mac_address?: string;
  /**
   * Management only
   * This interface is used only for out-of-band management
   */
  mgmt_only?: boolean;
  /**
   * Description
   */
  description?: string;
  /**
   * Mode
   */
  mode?: {
    label: "Access" | "Tagged" | "Tagged (All)";
    value: "access" | "tagged" | "tagged-all";
  };
  untagged_vlan?: NestedVLAN;
  tagged_vlans?: NestedVLAN[];
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Count ipaddresses
   */
  readonly count_ipaddresses?: number;
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface InterfaceConnection {
  interface_a?: NestedInterface;
  interface_b: NestedInterface;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
}
export interface InterfaceTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device_type: NestedDeviceType;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type: {
    label:
      | "Virtual"
      | "Link Aggregation Group (LAG)"
      | "100BASE-TX (10/100ME)"
      | "1000BASE-T (1GE)"
      | "2.5GBASE-T (2.5GE)"
      | "5GBASE-T (5GE)"
      | "10GBASE-T (10GE)"
      | "10GBASE-CX4 (10GE)"
      | "GBIC (1GE)"
      | "SFP (1GE)"
      | "SFP+ (10GE)"
      | "XFP (10GE)"
      | "XENPAK (10GE)"
      | "X2 (10GE)"
      | "SFP28 (25GE)"
      | "SFP56 (50GE)"
      | "QSFP+ (40GE)"
      | "QSFP28 (50GE)"
      | "CFP (100GE)"
      | "CFP2 (100GE)"
      | "CFP2 (200GE)"
      | "CFP4 (100GE)"
      | "Cisco CPAK (100GE)"
      | "QSFP28 (100GE)"
      | "QSFP56 (200GE)"
      | "QSFP-DD (400GE)"
      | "OSFP (400GE)"
      | "IEEE 802.11a"
      | "IEEE 802.11b/g"
      | "IEEE 802.11n"
      | "IEEE 802.11ac"
      | "IEEE 802.11ad"
      | "IEEE 802.11ax"
      | "GSM"
      | "CDMA"
      | "LTE"
      | "OC-3/STM-1"
      | "OC-12/STM-4"
      | "OC-48/STM-16"
      | "OC-192/STM-64"
      | "OC-768/STM-256"
      | "OC-1920/STM-640"
      | "OC-3840/STM-1234"
      | "SFP (1GFC)"
      | "SFP (2GFC)"
      | "SFP (4GFC)"
      | "SFP+ (8GFC)"
      | "SFP+ (16GFC)"
      | "SFP28 (32GFC)"
      | "QSFP+ (64GFC)"
      | "QSFP28 (128GFC)"
      | "SDR (2 Gbps)"
      | "DDR (4 Gbps)"
      | "QDR (8 Gbps)"
      | "FDR10 (10 Gbps)"
      | "FDR (13.5 Gbps)"
      | "EDR (25 Gbps)"
      | "HDR (50 Gbps)"
      | "NDR (100 Gbps)"
      | "XDR (250 Gbps)"
      | "T1 (1.544 Mbps)"
      | "E1 (2.048 Mbps)"
      | "T3 (45 Mbps)"
      | "E3 (34 Mbps)"
      | "Cisco StackWise"
      | "Cisco StackWise Plus"
      | "Cisco FlexStack"
      | "Cisco FlexStack Plus"
      | "Juniper VCP"
      | "Extreme SummitStack"
      | "Extreme SummitStack-128"
      | "Extreme SummitStack-256"
      | "Extreme SummitStack-512"
      | "Other";
    value:
      | "virtual"
      | "lag"
      | "100base-tx"
      | "1000base-t"
      | "2.5gbase-t"
      | "5gbase-t"
      | "10gbase-t"
      | "10gbase-cx4"
      | "1000base-x-gbic"
      | "1000base-x-sfp"
      | "10gbase-x-sfpp"
      | "10gbase-x-xfp"
      | "10gbase-x-xenpak"
      | "10gbase-x-x2"
      | "25gbase-x-sfp28"
      | "50gbase-x-sfp56"
      | "40gbase-x-qsfpp"
      | "50gbase-x-sfp28"
      | "100gbase-x-cfp"
      | "100gbase-x-cfp2"
      | "200gbase-x-cfp2"
      | "100gbase-x-cfp4"
      | "100gbase-x-cpak"
      | "100gbase-x-qsfp28"
      | "200gbase-x-qsfp56"
      | "400gbase-x-qsfpdd"
      | "400gbase-x-osfp"
      | "ieee802.11a"
      | "ieee802.11g"
      | "ieee802.11n"
      | "ieee802.11ac"
      | "ieee802.11ad"
      | "ieee802.11ax"
      | "gsm"
      | "cdma"
      | "lte"
      | "sonet-oc3"
      | "sonet-oc12"
      | "sonet-oc48"
      | "sonet-oc192"
      | "sonet-oc768"
      | "sonet-oc1920"
      | "sonet-oc3840"
      | "1gfc-sfp"
      | "2gfc-sfp"
      | "4gfc-sfp"
      | "8gfc-sfpp"
      | "16gfc-sfpp"
      | "32gfc-sfp28"
      | "64gfc-qsfpp"
      | "128gfc-sfp28"
      | "infiniband-sdr"
      | "infiniband-ddr"
      | "infiniband-qdr"
      | "infiniband-fdr10"
      | "infiniband-fdr"
      | "infiniband-edr"
      | "infiniband-hdr"
      | "infiniband-ndr"
      | "infiniband-xdr"
      | "t1"
      | "e1"
      | "t3"
      | "e3"
      | "cisco-stackwise"
      | "cisco-stackwise-plus"
      | "cisco-flexstack"
      | "cisco-flexstack-plus"
      | "juniper-vcp"
      | "extreme-summitstack"
      | "extreme-summitstack-128"
      | "extreme-summitstack-256"
      | "extreme-summitstack-512"
      | "other";
  };
  /**
   * Management only
   */
  mgmt_only?: boolean;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface InventoryItem {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Parent
   */
  parent?: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  manufacturer?: NestedManufacturer;
  /**
   * Part ID
   * Manufacturer-assigned part identifier
   */
  part_id?: string;
  /**
   * Serial number
   */
  serial?: string;
  /**
   * Asset tag
   * A unique tag used to identify this item
   */
  asset_tag?: string;
  /**
   * Discovered
   * This item was automatically discovered
   */
  discovered?: boolean;
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface IpamAggregates {
  id?: string;
  date_added?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  family?: number;
  prefix?: string;
  rir_id?: string;
  rir?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  date_added__n?: string;
  date_added__lte?: string;
  date_added__lt?: string;
  date_added__gte?: string;
  date_added__gt?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  rir_id__n?: string;
  rir__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface IpamIpAddresses {
  id?: string;
  dns_name?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  family?: number;
  parent?: string;
  address?: string;
  mask_length?: number;
  vrf_id?: string;
  vrf?: string;
  present_in_vrf_id?: string;
  present_in_vrf?: string;
  device?: string;
  device_id?: string;
  virtual_machine?: string;
  virtual_machine_id?: string;
  interface?: string;
  interface_id?: string;
  vminterface?: string;
  vminterface_id?: string;
  assigned_to_interface?: string;
  status?: string;
  role?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  dns_name__n?: string;
  dns_name__ic?: string;
  dns_name__nic?: string;
  dns_name__iew?: string;
  dns_name__niew?: string;
  dns_name__isw?: string;
  dns_name__nisw?: string;
  dns_name__ie?: string;
  dns_name__nie?: string;
  dns_name__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  vrf_id__n?: string;
  vrf__n?: string;
  interface__n?: string;
  interface_id__n?: string;
  vminterface__n?: string;
  vminterface_id__n?: string;
  status__n?: string;
  role__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface IpamPrefixes {
  id?: string;
  is_pool?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  family?: number;
  prefix?: string;
  within?: string;
  within_include?: string;
  contains?: string;
  depth?: string;
  children?: string;
  mask_length?: number;
  mask_length__gte?: number;
  mask_length__lte?: number;
  vrf_id?: string;
  vrf?: string;
  present_in_vrf_id?: string;
  present_in_vrf?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  vlan_id?: string;
  vlan_vid?: number;
  role_id?: string;
  role?: string;
  status?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  depth__n?: string;
  depth__lte?: string;
  depth__lt?: string;
  depth__gte?: string;
  depth__gt?: string;
  children__n?: string;
  children__lte?: string;
  children__lt?: string;
  children__gte?: string;
  children__gt?: string;
  vrf_id__n?: string;
  vrf__n?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  vlan_id__n?: string;
  role_id__n?: string;
  role__n?: string;
  status__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface IpamRirs {
  id?: string;
  name?: string;
  slug?: string;
  is_private?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  limit?: number;
  offset?: number;
}
export interface IpamRoles {
  id?: string;
  name?: string;
  slug?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  limit?: number;
  offset?: number;
}
export interface IpamRouteTargets {
  id?: string;
  name?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  importing_vrf_id?: string;
  importing_vrf?: string;
  exporting_vrf_id?: string;
  exporting_vrf?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  importing_vrf_id__n?: string;
  importing_vrf__n?: string;
  exporting_vrf_id__n?: string;
  exporting_vrf__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface IpamServices {
  id?: string;
  name?: string;
  protocol?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  device_id?: string;
  device?: string;
  virtual_machine_id?: string;
  virtual_machine?: string;
  port?: number;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  protocol__n?: string;
  device_id__n?: string;
  device__n?: string;
  virtual_machine_id__n?: string;
  virtual_machine__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface IpamVlanGroups {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  scope_id?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  scope_type?: string;
  region?: number;
  sitegroup?: number;
  site?: number;
  location?: number;
  rack?: number;
  clustergroup?: number;
  cluster?: number;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  scope_id__n?: string;
  scope_id__lte?: string;
  scope_id__lt?: string;
  scope_id__gte?: string;
  scope_id__gt?: string;
  scope_type__n?: string;
  limit?: number;
  offset?: number;
}
export interface IpamVlans {
  id?: string;
  vid?: string;
  name?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  group_id?: string;
  group?: string;
  role_id?: string;
  role?: string;
  status?: string;
  available_on_device?: string;
  available_on_virtualmachine?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  vid__n?: string;
  vid__lte?: string;
  vid__lt?: string;
  vid__gte?: string;
  vid__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  group_id__n?: string;
  group__n?: string;
  role_id__n?: string;
  role__n?: string;
  status__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface IpamVrfs {
  id?: string;
  name?: string;
  rd?: string;
  enforce_unique?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  import_target_id?: string;
  import_target?: string;
  export_target_id?: string;
  export_target?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  rd__n?: string;
  rd__ic?: string;
  rd__nic?: string;
  rd__iew?: string;
  rd__niew?: string;
  rd__isw?: string;
  rd__nisw?: string;
  rd__ie?: string;
  rd__nie?: string;
  rd__empty?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  import_target_id__n?: string;
  import_target__n?: string;
  export_target_id__n?: string;
  export_target__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface JobResult {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Created
   */
  readonly created?: string; // date-time
  /**
   * Completed
   */
  completed?: string; // date-time
  /**
   * Name
   */
  name: string;
  /**
   * Obj type
   */
  readonly obj_type?: string;
  /**
   * Status
   */
  readonly status?: {
    label: "Pending" | "Running" | "Completed" | "Errored" | "Failed";
    value: "pending" | "running" | "completed" | "errored" | "failed";
  };
  user?: NestedUser;
  /**
   * Data
   */
  data?: string;
  /**
   * Job id
   */
  job_id: string; // uuid
}
export interface JournalEntry {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Assigned object type
   */
  assigned_object_type: string;
  /**
   * Assigned object id
   */
  assigned_object_id: number;
  /**
   * Assigned object
   */
  readonly assigned_object?: {
    [name: string]: string;
  };
  /**
   * Created
   */
  readonly created?: string; // date-time
  /**
   * Created by
   */
  created_by?: number;
  /**
   * Kind
   */
  kind?: {
    label: "Info" | "Success" | "Warning" | "Danger";
    value: "info" | "success" | "warning" | "danger";
  };
  /**
   * Comments
   */
  comments: string;
}
export interface Location {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  site: NestedSite;
  parent?: NestedLocation;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Rack count
   */
  readonly rack_count?: number;
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface Manufacturer {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Devicetype count
   */
  readonly devicetype_count?: number;
  /**
   * Inventoryitem count
   */
  readonly inventoryitem_count?: number;
  /**
   * Platform count
   */
  readonly platform_count?: number;
}
export interface NestedCable {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Label
   */
  label?: string;
}
export interface NestedCircuit {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Circuit ID
   */
  cid: string;
}
export interface NestedCircuitType {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Circuit count
   */
  readonly circuit_count?: number;
}
export interface NestedCluster {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
}
export interface NestedClusterGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Cluster count
   */
  readonly cluster_count?: number;
}
export interface NestedClusterType {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Cluster count
   */
  readonly cluster_count?: number;
}
export interface NestedDevice {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name?: string;
  /**
   * Display name
   */
  readonly display_name?: string;
}
export interface NestedDeviceRole {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
}
export interface NestedDeviceType {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  manufacturer?: NestedManufacturer;
  /**
   * Model
   */
  model: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Device count
   */
  readonly device_count?: number;
}
export interface NestedGroup {
  /**
   * ID
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
}
export interface NestedIPAddress {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Family
   */
  readonly family?: number;
  /**
   * Address
   * IPv4 or IPv6 address (with mask)
   */
  address: string;
}
export interface NestedInterface {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device?: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Cable
   */
  cable?: number;
  /**
   * occupied
   */
  readonly _occupied?: string;
}
export interface NestedLocation {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Rack count
   */
  readonly rack_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface NestedManufacturer {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Devicetype count
   */
  readonly devicetype_count?: number;
}
export interface NestedPlatform {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
}
export interface NestedPowerPanel {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Powerfeed count
   */
  readonly powerfeed_count?: number;
}
export interface NestedPowerPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device?: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Cable
   */
  cable?: number;
  /**
   * occupied
   */
  readonly _occupied?: string;
}
export interface NestedPowerPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
}
export interface NestedProvider {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Circuit count
   */
  readonly circuit_count?: number;
}
export interface NestedProviderNetwork {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
}
export interface NestedRIR {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Aggregate count
   */
  readonly aggregate_count?: number;
}
export interface NestedRack {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Device count
   */
  readonly device_count?: number;
}
export interface NestedRackRole {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Rack count
   */
  readonly rack_count?: number;
}
export interface NestedRearPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
}
export interface NestedRegion {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Site count
   */
  readonly site_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface NestedRole {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
  /**
   * Vlan count
   */
  readonly vlan_count?: number;
}
export interface NestedRouteTarget {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   * Route target value (formatted in accordance with RFC 4360)
   */
  name: string;
}
export interface NestedSecretRole {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Secret count
   */
  readonly secret_count?: number;
}
export interface NestedSite {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
}
export interface NestedSiteGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Site count
   */
  readonly site_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface NestedTag {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Color
   */
  color?: string; // ^[0-9a-f]{6}$
}
export interface NestedTenant {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
}
export interface NestedTenantGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Tenant count
   */
  readonly tenant_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface NestedUser {
  /**
   * ID
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   */
  username: string; // ^[\w.@+-]+$
}
export interface NestedVLAN {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * ID
   */
  vid: number;
  /**
   * Name
   */
  name: string;
  /**
   * Display name
   */
  readonly display_name?: string;
}
export interface NestedVLANGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Vlan count
   */
  readonly vlan_count?: number;
}
export interface NestedVMInterface {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  virtual_machine?: NestedVirtualMachine;
  /**
   * Name
   */
  name: string;
}
export interface NestedVRF {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Route distinguisher
   * Unique route distinguisher (as defined in RFC 4364)
   */
  rd?: string;
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
}
export interface NestedVirtualChassis {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Name
   */
  name: string;
  /**
   * Url
   */
  readonly url?: string; // uri
  master: NestedDevice;
  /**
   * Member count
   */
  readonly member_count?: number;
}
export interface NestedVirtualMachine {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
}
export interface ObjectChange {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Time
   */
  readonly time?: string; // date-time
  user?: NestedUser;
  /**
   * User name
   */
  readonly user_name?: string;
  /**
   * Request id
   */
  readonly request_id?: string; // uuid
  /**
   * Action
   */
  readonly action?: {
    label: "Created" | "Updated" | "Deleted";
    value: "create" | "update" | "delete";
  };
  /**
   * Changed object type
   */
  readonly changed_object_type?: string;
  /**
   * Changed object id
   */
  changed_object_id: number;
  /**
   * Changed object
   *
   * Serialize a nested representation of the changed object.
   *
   */
  readonly changed_object?: {
    [name: string]: string;
  };
  /**
   * Prechange data
   */
  readonly prechange_data?: string;
  /**
   * Postchange data
   */
  readonly postchange_data?: string;
}
export interface ObjectPermission {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Enabled
   */
  enabled?: boolean;
  object_types: string[];
  groups?: NestedGroup[];
  users?: NestedUser[];
  /**
   * The list of actions granted by this permission
   */
  actions: string[];
  /**
   * Constraints
   * Queryset filter matching the applicable objects of the selected type(s)
   */
  constraints?: string;
}
export interface Platform {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  manufacturer?: NestedManufacturer;
  /**
   * NAPALM driver
   * The name of the NAPALM driver to use when interacting with devices
   */
  napalm_driver?: string;
  /**
   * NAPALM arguments
   * Additional arguments to pass when initiating the NAPALM driver (JSON format)
   */
  napalm_args?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
}
export interface PowerFeed {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  power_panel: NestedPowerPanel;
  rack?: NestedRack;
  /**
   * Name
   */
  name: string;
  /**
   * Status
   */
  status?: {
    label: "Offline" | "Active" | "Planned" | "Failed";
    value: "offline" | "active" | "planned" | "failed";
  };
  /**
   * Type
   */
  type?: {
    label: "Primary" | "Redundant";
    value: "primary" | "redundant";
  };
  /**
   * Supply
   */
  supply?: {
    label: "AC" | "DC";
    value: "ac" | "dc";
  };
  /**
   * Phase
   */
  phase?: {
    label: "Single phase" | "Three-phase";
    value: "single-phase" | "three-phase";
  };
  /**
   * Voltage
   */
  voltage?: number;
  /**
   * Amperage
   */
  amperage?: number;
  /**
   * Max utilization
   * Maximum permissible draw (percentage)
   */
  max_utilization?: number;
  /**
   * Comments
   */
  comments?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface PowerOutlet {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "C5"
      | "C7"
      | "C13"
      | "C15"
      | "C19"
      | "P+N+E 4H"
      | "P+N+E 6H"
      | "P+N+E 9H"
      | "2P+E 4H"
      | "2P+E 6H"
      | "2P+E 9H"
      | "3P+E 4H"
      | "3P+E 6H"
      | "3P+E 9H"
      | "3P+N+E 4H"
      | "3P+N+E 6H"
      | "3P+N+E 9H"
      | "NEMA 1-15R"
      | "NEMA 5-15R"
      | "NEMA 5-20R"
      | "NEMA 5-30R"
      | "NEMA 5-50R"
      | "NEMA 6-15R"
      | "NEMA 6-20R"
      | "NEMA 6-30R"
      | "NEMA 6-50R"
      | "NEMA 10-30R"
      | "NEMA 10-50R"
      | "NEMA 14-20R"
      | "NEMA 14-30R"
      | "NEMA 14-50R"
      | "NEMA 14-60R"
      | "NEMA 15-15R"
      | "NEMA 15-20R"
      | "NEMA 15-30R"
      | "NEMA 15-50R"
      | "NEMA 15-60R"
      | "NEMA L1-15R"
      | "NEMA L5-15R"
      | "NEMA L5-20R"
      | "NEMA L5-30R"
      | "NEMA L5-50R"
      | "NEMA L6-15R"
      | "NEMA L6-20R"
      | "NEMA L6-30R"
      | "NEMA L6-50R"
      | "NEMA L10-30R"
      | "NEMA L14-20R"
      | "NEMA L14-30R"
      | "NEMA L14-50R"
      | "NEMA L14-60R"
      | "NEMA L15-20R"
      | "NEMA L15-30R"
      | "NEMA L15-50R"
      | "NEMA L15-60R"
      | "NEMA L21-20R"
      | "NEMA L21-30R"
      | "CS6360C"
      | "CS6364C"
      | "CS8164C"
      | "CS8264C"
      | "CS8364C"
      | "CS8464C"
      | "ITA Type E (CEE7/5)"
      | "ITA Type F (CEE7/3)"
      | "ITA Type G (BS 1363)"
      | "ITA Type H"
      | "ITA Type I"
      | "ITA Type J"
      | "ITA Type K"
      | "ITA Type L (CEI 23-50)"
      | "ITA Type M (BS 546)"
      | "ITA Type N"
      | "ITA Type O"
      | "USB Type A"
      | "USB Micro B"
      | "USB Type C"
      | "DC Terminal"
      | "HDOT Cx"
      | "Saf-D-Grid";
    value:
      | "iec-60320-c5"
      | "iec-60320-c7"
      | "iec-60320-c13"
      | "iec-60320-c15"
      | "iec-60320-c19"
      | "iec-60309-p-n-e-4h"
      | "iec-60309-p-n-e-6h"
      | "iec-60309-p-n-e-9h"
      | "iec-60309-2p-e-4h"
      | "iec-60309-2p-e-6h"
      | "iec-60309-2p-e-9h"
      | "iec-60309-3p-e-4h"
      | "iec-60309-3p-e-6h"
      | "iec-60309-3p-e-9h"
      | "iec-60309-3p-n-e-4h"
      | "iec-60309-3p-n-e-6h"
      | "iec-60309-3p-n-e-9h"
      | "nema-1-15r"
      | "nema-5-15r"
      | "nema-5-20r"
      | "nema-5-30r"
      | "nema-5-50r"
      | "nema-6-15r"
      | "nema-6-20r"
      | "nema-6-30r"
      | "nema-6-50r"
      | "nema-10-30r"
      | "nema-10-50r"
      | "nema-14-20r"
      | "nema-14-30r"
      | "nema-14-50r"
      | "nema-14-60r"
      | "nema-15-15r"
      | "nema-15-20r"
      | "nema-15-30r"
      | "nema-15-50r"
      | "nema-15-60r"
      | "nema-l1-15r"
      | "nema-l5-15r"
      | "nema-l5-20r"
      | "nema-l5-30r"
      | "nema-l5-50r"
      | "nema-l6-15r"
      | "nema-l6-20r"
      | "nema-l6-30r"
      | "nema-l6-50r"
      | "nema-l10-30r"
      | "nema-l14-20r"
      | "nema-l14-30r"
      | "nema-l14-50r"
      | "nema-l14-60r"
      | "nema-l15-20r"
      | "nema-l15-30r"
      | "nema-l15-50r"
      | "nema-l15-60r"
      | "nema-l21-20r"
      | "nema-l21-30r"
      | "CS6360C"
      | "CS6364C"
      | "CS8164C"
      | "CS8264C"
      | "CS8364C"
      | "CS8464C"
      | "ita-e"
      | "ita-f"
      | "ita-g"
      | "ita-h"
      | "ita-i"
      | "ita-j"
      | "ita-k"
      | "ita-l"
      | "ita-m"
      | "ita-n"
      | "ita-o"
      | "usb-a"
      | "usb-micro-b"
      | "usb-c"
      | "dc-terminal"
      | "hdot-cx"
      | "saf-d-grid";
  };
  power_port?: NestedPowerPort;
  /**
   * Feed leg
   */
  feed_leg?: {
    label: "A" | "B" | "C";
    value: "A" | "B" | "C";
  };
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface PowerOutletTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device_type: NestedDeviceType;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "C5"
      | "C7"
      | "C13"
      | "C15"
      | "C19"
      | "P+N+E 4H"
      | "P+N+E 6H"
      | "P+N+E 9H"
      | "2P+E 4H"
      | "2P+E 6H"
      | "2P+E 9H"
      | "3P+E 4H"
      | "3P+E 6H"
      | "3P+E 9H"
      | "3P+N+E 4H"
      | "3P+N+E 6H"
      | "3P+N+E 9H"
      | "NEMA 1-15R"
      | "NEMA 5-15R"
      | "NEMA 5-20R"
      | "NEMA 5-30R"
      | "NEMA 5-50R"
      | "NEMA 6-15R"
      | "NEMA 6-20R"
      | "NEMA 6-30R"
      | "NEMA 6-50R"
      | "NEMA 10-30R"
      | "NEMA 10-50R"
      | "NEMA 14-20R"
      | "NEMA 14-30R"
      | "NEMA 14-50R"
      | "NEMA 14-60R"
      | "NEMA 15-15R"
      | "NEMA 15-20R"
      | "NEMA 15-30R"
      | "NEMA 15-50R"
      | "NEMA 15-60R"
      | "NEMA L1-15R"
      | "NEMA L5-15R"
      | "NEMA L5-20R"
      | "NEMA L5-30R"
      | "NEMA L5-50R"
      | "NEMA L6-15R"
      | "NEMA L6-20R"
      | "NEMA L6-30R"
      | "NEMA L6-50R"
      | "NEMA L10-30R"
      | "NEMA L14-20R"
      | "NEMA L14-30R"
      | "NEMA L14-50R"
      | "NEMA L14-60R"
      | "NEMA L15-20R"
      | "NEMA L15-30R"
      | "NEMA L15-50R"
      | "NEMA L15-60R"
      | "NEMA L21-20R"
      | "NEMA L21-30R"
      | "CS6360C"
      | "CS6364C"
      | "CS8164C"
      | "CS8264C"
      | "CS8364C"
      | "CS8464C"
      | "ITA Type E (CEE7/5)"
      | "ITA Type F (CEE7/3)"
      | "ITA Type G (BS 1363)"
      | "ITA Type H"
      | "ITA Type I"
      | "ITA Type J"
      | "ITA Type K"
      | "ITA Type L (CEI 23-50)"
      | "ITA Type M (BS 546)"
      | "ITA Type N"
      | "ITA Type O"
      | "USB Type A"
      | "USB Micro B"
      | "USB Type C"
      | "DC Terminal"
      | "HDOT Cx"
      | "Saf-D-Grid";
    value:
      | "iec-60320-c5"
      | "iec-60320-c7"
      | "iec-60320-c13"
      | "iec-60320-c15"
      | "iec-60320-c19"
      | "iec-60309-p-n-e-4h"
      | "iec-60309-p-n-e-6h"
      | "iec-60309-p-n-e-9h"
      | "iec-60309-2p-e-4h"
      | "iec-60309-2p-e-6h"
      | "iec-60309-2p-e-9h"
      | "iec-60309-3p-e-4h"
      | "iec-60309-3p-e-6h"
      | "iec-60309-3p-e-9h"
      | "iec-60309-3p-n-e-4h"
      | "iec-60309-3p-n-e-6h"
      | "iec-60309-3p-n-e-9h"
      | "nema-1-15r"
      | "nema-5-15r"
      | "nema-5-20r"
      | "nema-5-30r"
      | "nema-5-50r"
      | "nema-6-15r"
      | "nema-6-20r"
      | "nema-6-30r"
      | "nema-6-50r"
      | "nema-10-30r"
      | "nema-10-50r"
      | "nema-14-20r"
      | "nema-14-30r"
      | "nema-14-50r"
      | "nema-14-60r"
      | "nema-15-15r"
      | "nema-15-20r"
      | "nema-15-30r"
      | "nema-15-50r"
      | "nema-15-60r"
      | "nema-l1-15r"
      | "nema-l5-15r"
      | "nema-l5-20r"
      | "nema-l5-30r"
      | "nema-l5-50r"
      | "nema-l6-15r"
      | "nema-l6-20r"
      | "nema-l6-30r"
      | "nema-l6-50r"
      | "nema-l10-30r"
      | "nema-l14-20r"
      | "nema-l14-30r"
      | "nema-l14-50r"
      | "nema-l14-60r"
      | "nema-l15-20r"
      | "nema-l15-30r"
      | "nema-l15-50r"
      | "nema-l15-60r"
      | "nema-l21-20r"
      | "nema-l21-30r"
      | "CS6360C"
      | "CS6364C"
      | "CS8164C"
      | "CS8264C"
      | "CS8364C"
      | "CS8464C"
      | "ita-e"
      | "ita-f"
      | "ita-g"
      | "ita-h"
      | "ita-i"
      | "ita-j"
      | "ita-k"
      | "ita-l"
      | "ita-m"
      | "ita-n"
      | "ita-o"
      | "usb-a"
      | "usb-micro-b"
      | "usb-c"
      | "dc-terminal"
      | "hdot-cx"
      | "saf-d-grid";
  };
  power_port?: NestedPowerPortTemplate;
  /**
   * Feed leg
   */
  feed_leg?: {
    label: "A" | "B" | "C";
    value: "A" | "B" | "C";
  };
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface PowerPanel {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  site: NestedSite;
  location?: NestedLocation;
  /**
   * Name
   */
  name: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Powerfeed count
   */
  readonly powerfeed_count?: number;
}
export interface PowerPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "C6"
      | "C8"
      | "C14"
      | "C16"
      | "C20"
      | "P+N+E 4H"
      | "P+N+E 6H"
      | "P+N+E 9H"
      | "2P+E 4H"
      | "2P+E 6H"
      | "2P+E 9H"
      | "3P+E 4H"
      | "3P+E 6H"
      | "3P+E 9H"
      | "3P+N+E 4H"
      | "3P+N+E 6H"
      | "3P+N+E 9H"
      | "NEMA 1-15P"
      | "NEMA 5-15P"
      | "NEMA 5-20P"
      | "NEMA 5-30P"
      | "NEMA 5-50P"
      | "NEMA 6-15P"
      | "NEMA 6-20P"
      | "NEMA 6-30P"
      | "NEMA 6-50P"
      | "NEMA 10-30P"
      | "NEMA 10-50P"
      | "NEMA 14-20P"
      | "NEMA 14-30P"
      | "NEMA 14-50P"
      | "NEMA 14-60P"
      | "NEMA 15-15P"
      | "NEMA 15-20P"
      | "NEMA 15-30P"
      | "NEMA 15-50P"
      | "NEMA 15-60P"
      | "NEMA L1-15P"
      | "NEMA L5-15P"
      | "NEMA L5-20P"
      | "NEMA L5-30P"
      | "NEMA L5-50P"
      | "NEMA L6-15P"
      | "NEMA L6-20P"
      | "NEMA L6-30P"
      | "NEMA L6-50P"
      | "NEMA L10-30P"
      | "NEMA L14-20P"
      | "NEMA L14-30P"
      | "NEMA L14-50P"
      | "NEMA L14-60P"
      | "NEMA L15-20P"
      | "NEMA L15-30P"
      | "NEMA L15-50P"
      | "NEMA L15-60P"
      | "NEMA L21-20P"
      | "NEMA L21-30P"
      | "CS6361C"
      | "CS6365C"
      | "CS8165C"
      | "CS8265C"
      | "CS8365C"
      | "CS8465C"
      | "ITA Type E (CEE 7/5)"
      | "ITA Type F (CEE 7/4)"
      | "ITA Type E/F (CEE 7/7)"
      | "ITA Type G (BS 1363)"
      | "ITA Type H"
      | "ITA Type I"
      | "ITA Type J"
      | "ITA Type K"
      | "ITA Type L (CEI 23-50)"
      | "ITA Type M (BS 546)"
      | "ITA Type N"
      | "ITA Type O"
      | "USB Type A"
      | "USB Type B"
      | "USB Type C"
      | "USB Mini A"
      | "USB Mini B"
      | "USB Micro A"
      | "USB Micro B"
      | "USB 3.0 Type B"
      | "USB 3.0 Micro B"
      | "DC Terminal"
      | "Saf-D-Grid"
      | "Hardwired";
    value:
      | "iec-60320-c6"
      | "iec-60320-c8"
      | "iec-60320-c14"
      | "iec-60320-c16"
      | "iec-60320-c20"
      | "iec-60309-p-n-e-4h"
      | "iec-60309-p-n-e-6h"
      | "iec-60309-p-n-e-9h"
      | "iec-60309-2p-e-4h"
      | "iec-60309-2p-e-6h"
      | "iec-60309-2p-e-9h"
      | "iec-60309-3p-e-4h"
      | "iec-60309-3p-e-6h"
      | "iec-60309-3p-e-9h"
      | "iec-60309-3p-n-e-4h"
      | "iec-60309-3p-n-e-6h"
      | "iec-60309-3p-n-e-9h"
      | "nema-1-15p"
      | "nema-5-15p"
      | "nema-5-20p"
      | "nema-5-30p"
      | "nema-5-50p"
      | "nema-6-15p"
      | "nema-6-20p"
      | "nema-6-30p"
      | "nema-6-50p"
      | "nema-10-30p"
      | "nema-10-50p"
      | "nema-14-20p"
      | "nema-14-30p"
      | "nema-14-50p"
      | "nema-14-60p"
      | "nema-15-15p"
      | "nema-15-20p"
      | "nema-15-30p"
      | "nema-15-50p"
      | "nema-15-60p"
      | "nema-l1-15p"
      | "nema-l5-15p"
      | "nema-l5-20p"
      | "nema-l5-30p"
      | "nema-l5-50p"
      | "nema-l6-15p"
      | "nema-l6-20p"
      | "nema-l6-30p"
      | "nema-l6-50p"
      | "nema-l10-30p"
      | "nema-l14-20p"
      | "nema-l14-30p"
      | "nema-l14-50p"
      | "nema-l14-60p"
      | "nema-l15-20p"
      | "nema-l15-30p"
      | "nema-l15-50p"
      | "nema-l15-60p"
      | "nema-l21-20p"
      | "nema-l21-30p"
      | "cs6361c"
      | "cs6365c"
      | "cs8165c"
      | "cs8265c"
      | "cs8365c"
      | "cs8465c"
      | "ita-e"
      | "ita-f"
      | "ita-ef"
      | "ita-g"
      | "ita-h"
      | "ita-i"
      | "ita-j"
      | "ita-k"
      | "ita-l"
      | "ita-m"
      | "ita-n"
      | "ita-o"
      | "usb-a"
      | "usb-b"
      | "usb-c"
      | "usb-mini-a"
      | "usb-mini-b"
      | "usb-micro-a"
      | "usb-micro-b"
      | "usb-3-b"
      | "usb-3-micro-b"
      | "dc-terminal"
      | "saf-d-grid"
      | "hardwired";
  };
  /**
   * Maximum draw
   * Maximum power draw (watts)
   */
  maximum_draw?: number;
  /**
   * Allocated draw
   * Allocated power draw (watts)
   */
  allocated_draw?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface PowerPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device_type: NestedDeviceType;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "C6"
      | "C8"
      | "C14"
      | "C16"
      | "C20"
      | "P+N+E 4H"
      | "P+N+E 6H"
      | "P+N+E 9H"
      | "2P+E 4H"
      | "2P+E 6H"
      | "2P+E 9H"
      | "3P+E 4H"
      | "3P+E 6H"
      | "3P+E 9H"
      | "3P+N+E 4H"
      | "3P+N+E 6H"
      | "3P+N+E 9H"
      | "NEMA 1-15P"
      | "NEMA 5-15P"
      | "NEMA 5-20P"
      | "NEMA 5-30P"
      | "NEMA 5-50P"
      | "NEMA 6-15P"
      | "NEMA 6-20P"
      | "NEMA 6-30P"
      | "NEMA 6-50P"
      | "NEMA 10-30P"
      | "NEMA 10-50P"
      | "NEMA 14-20P"
      | "NEMA 14-30P"
      | "NEMA 14-50P"
      | "NEMA 14-60P"
      | "NEMA 15-15P"
      | "NEMA 15-20P"
      | "NEMA 15-30P"
      | "NEMA 15-50P"
      | "NEMA 15-60P"
      | "NEMA L1-15P"
      | "NEMA L5-15P"
      | "NEMA L5-20P"
      | "NEMA L5-30P"
      | "NEMA L5-50P"
      | "NEMA L6-15P"
      | "NEMA L6-20P"
      | "NEMA L6-30P"
      | "NEMA L6-50P"
      | "NEMA L10-30P"
      | "NEMA L14-20P"
      | "NEMA L14-30P"
      | "NEMA L14-50P"
      | "NEMA L14-60P"
      | "NEMA L15-20P"
      | "NEMA L15-30P"
      | "NEMA L15-50P"
      | "NEMA L15-60P"
      | "NEMA L21-20P"
      | "NEMA L21-30P"
      | "CS6361C"
      | "CS6365C"
      | "CS8165C"
      | "CS8265C"
      | "CS8365C"
      | "CS8465C"
      | "ITA Type E (CEE 7/5)"
      | "ITA Type F (CEE 7/4)"
      | "ITA Type E/F (CEE 7/7)"
      | "ITA Type G (BS 1363)"
      | "ITA Type H"
      | "ITA Type I"
      | "ITA Type J"
      | "ITA Type K"
      | "ITA Type L (CEI 23-50)"
      | "ITA Type M (BS 546)"
      | "ITA Type N"
      | "ITA Type O"
      | "USB Type A"
      | "USB Type B"
      | "USB Type C"
      | "USB Mini A"
      | "USB Mini B"
      | "USB Micro A"
      | "USB Micro B"
      | "USB 3.0 Type B"
      | "USB 3.0 Micro B"
      | "DC Terminal"
      | "Saf-D-Grid"
      | "Hardwired";
    value:
      | "iec-60320-c6"
      | "iec-60320-c8"
      | "iec-60320-c14"
      | "iec-60320-c16"
      | "iec-60320-c20"
      | "iec-60309-p-n-e-4h"
      | "iec-60309-p-n-e-6h"
      | "iec-60309-p-n-e-9h"
      | "iec-60309-2p-e-4h"
      | "iec-60309-2p-e-6h"
      | "iec-60309-2p-e-9h"
      | "iec-60309-3p-e-4h"
      | "iec-60309-3p-e-6h"
      | "iec-60309-3p-e-9h"
      | "iec-60309-3p-n-e-4h"
      | "iec-60309-3p-n-e-6h"
      | "iec-60309-3p-n-e-9h"
      | "nema-1-15p"
      | "nema-5-15p"
      | "nema-5-20p"
      | "nema-5-30p"
      | "nema-5-50p"
      | "nema-6-15p"
      | "nema-6-20p"
      | "nema-6-30p"
      | "nema-6-50p"
      | "nema-10-30p"
      | "nema-10-50p"
      | "nema-14-20p"
      | "nema-14-30p"
      | "nema-14-50p"
      | "nema-14-60p"
      | "nema-15-15p"
      | "nema-15-20p"
      | "nema-15-30p"
      | "nema-15-50p"
      | "nema-15-60p"
      | "nema-l1-15p"
      | "nema-l5-15p"
      | "nema-l5-20p"
      | "nema-l5-30p"
      | "nema-l5-50p"
      | "nema-l6-15p"
      | "nema-l6-20p"
      | "nema-l6-30p"
      | "nema-l6-50p"
      | "nema-l10-30p"
      | "nema-l14-20p"
      | "nema-l14-30p"
      | "nema-l14-50p"
      | "nema-l14-60p"
      | "nema-l15-20p"
      | "nema-l15-30p"
      | "nema-l15-50p"
      | "nema-l15-60p"
      | "nema-l21-20p"
      | "nema-l21-30p"
      | "cs6361c"
      | "cs6365c"
      | "cs8165c"
      | "cs8265c"
      | "cs8365c"
      | "cs8465c"
      | "ita-e"
      | "ita-f"
      | "ita-ef"
      | "ita-g"
      | "ita-h"
      | "ita-i"
      | "ita-j"
      | "ita-k"
      | "ita-l"
      | "ita-m"
      | "ita-n"
      | "ita-o"
      | "usb-a"
      | "usb-b"
      | "usb-c"
      | "usb-mini-a"
      | "usb-mini-b"
      | "usb-micro-a"
      | "usb-micro-b"
      | "usb-3-b"
      | "usb-3-micro-b"
      | "dc-terminal"
      | "saf-d-grid"
      | "hardwired";
  };
  /**
   * Maximum draw
   * Maximum power draw (watts)
   */
  maximum_draw?: number;
  /**
   * Allocated draw
   * Allocated power draw (watts)
   */
  allocated_draw?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface Prefix {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Family
   */
  readonly family?: {
    label: "IPv4" | "IPv6";
    value: 4 | 6;
  };
  /**
   * Prefix
   * IPv4 or IPv6 network with mask
   */
  prefix: string;
  site?: NestedSite;
  vrf?: NestedVRF;
  tenant?: NestedTenant;
  vlan?: NestedVLAN;
  /**
   * Status
   */
  status?: {
    label: "Container" | "Active" | "Reserved" | "Deprecated";
    value: "container" | "active" | "reserved" | "deprecated";
  };
  role?: NestedRole;
  /**
   * Is a pool
   * All IP addresses within this prefix are considered usable
   */
  is_pool?: boolean;
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Children
   */
  readonly children?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface PrefixLength {
  /**
   * Prefix length
   */
  prefix_length: number;
}
export interface Provider {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * ASN
   * 32-bit autonomous system number
   */
  asn?: number;
  /**
   * Account number
   */
  account?: string;
  /**
   * Portal URL
   */
  portal_url?: string; // uri
  /**
   * NOC contact
   */
  noc_contact?: string;
  /**
   * Admin contact
   */
  admin_contact?: string;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Circuit count
   */
  readonly circuit_count?: number;
}
export interface ProviderNetwork {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  provider: NestedProvider;
  /**
   * Name
   */
  name: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface RIR {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Private
   * IP space managed by this RIR is considered private
   */
  is_private?: boolean;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Aggregate count
   */
  readonly aggregate_count?: number;
}
export interface Rack {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Facility ID
   * Locally-assigned identifier
   */
  facility_id?: string;
  /**
   * Display name
   */
  readonly display_name?: string;
  site: NestedSite;
  location?: NestedLocation;
  tenant?: NestedTenant;
  /**
   * Status
   */
  status?: {
    label: "Reserved" | "Available" | "Planned" | "Active" | "Deprecated";
    value: "reserved" | "available" | "planned" | "active" | "deprecated";
  };
  role?: NestedRackRole;
  /**
   * Serial number
   */
  serial?: string;
  /**
   * Asset tag
   * A unique tag used to identify this rack
   */
  asset_tag?: string;
  /**
   * Type
   */
  type?: {
    label:
      | "2-post frame"
      | "4-post frame"
      | "4-post cabinet"
      | "Wall-mounted frame"
      | "Wall-mounted cabinet";
    value:
      | "2-post-frame"
      | "4-post-frame"
      | "4-post-cabinet"
      | "wall-frame"
      | "wall-cabinet";
  };
  /**
   * Width
   */
  width?: {
    label: "10 inches" | "19 inches" | "21 inches" | "23 inches";
    value: 10 | 19 | 21 | 23;
  };
  /**
   * Height (U)
   * Height in rack units
   */
  u_height?: number;
  /**
   * Descending units
   * Units are numbered top-to-bottom
   */
  desc_units?: boolean;
  /**
   * Outer width
   * Outer dimension of rack (width)
   */
  outer_width?: number;
  /**
   * Outer depth
   * Outer dimension of rack (depth)
   */
  outer_depth?: number;
  /**
   * Outer unit
   */
  outer_unit?: {
    label: "Millimeters" | "Inches";
    value: "mm" | "in";
  };
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Powerfeed count
   */
  readonly powerfeed_count?: number;
}
export interface RackReservation {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  rack: NestedRack;
  units: number[];
  /**
   * Created
   */
  readonly created?: string; // date
  user: NestedUser;
  tenant?: NestedTenant;
  /**
   * Description
   */
  description: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
}
export interface RackRole {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Color
   */
  color?: string; // ^[0-9a-f]{6}$
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Rack count
   */
  readonly rack_count?: number;
}
export interface RackUnit {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Name
   */
  readonly name?: string;
  /**
   * Face
   */
  readonly face?: {
    label: "Front" | "Rear";
    value: "front" | "rear";
  };
  device?: NestedDevice;
  /**
   * Occupied
   */
  readonly occupied?: boolean;
  /**
   * Display
   */
  readonly display?: string;
}
export interface RearPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device: NestedDevice;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type: {
    label:
      | "8P8C"
      | "8P6C"
      | "8P4C"
      | "8P2C"
      | "6P6C"
      | "6P4C"
      | "6P2C"
      | "4P4C"
      | "4P2C"
      | "GG45"
      | "TERA 4P"
      | "TERA 2P"
      | "TERA 1P"
      | "110 Punch"
      | "BNC"
      | "F Connector"
      | "N Connector"
      | "MRJ21"
      | "FC"
      | "LC"
      | "LC/APC"
      | "LSH"
      | "LSH/APC"
      | "MPO"
      | "MTRJ"
      | "SC"
      | "SC/APC"
      | "ST"
      | "CS"
      | "SN"
      | "Splice";
    value:
      | "8p8c"
      | "8p6c"
      | "8p4c"
      | "8p2c"
      | "6p6c"
      | "6p4c"
      | "6p2c"
      | "4p4c"
      | "4p2c"
      | "gg45"
      | "tera-4p"
      | "tera-2p"
      | "tera-1p"
      | "110-punch"
      | "bnc"
      | "f"
      | "n"
      | "mrj21"
      | "fc"
      | "lc"
      | "lc-apc"
      | "lsh"
      | "lsh-apc"
      | "mpo"
      | "mtrj"
      | "sc"
      | "sc-apc"
      | "st"
      | "cs"
      | "sn"
      | "splice";
  };
  /**
   * Positions
   */
  positions?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface RearPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device_type: NestedDeviceType;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type: {
    label:
      | "8P8C"
      | "8P6C"
      | "8P4C"
      | "8P2C"
      | "6P6C"
      | "6P4C"
      | "6P2C"
      | "4P4C"
      | "4P2C"
      | "GG45"
      | "TERA 4P"
      | "TERA 2P"
      | "TERA 1P"
      | "110 Punch"
      | "BNC"
      | "F Connector"
      | "N Connector"
      | "MRJ21"
      | "FC"
      | "LC"
      | "LC/APC"
      | "LSH"
      | "LSH/APC"
      | "MPO"
      | "MTRJ"
      | "SC"
      | "SC/APC"
      | "ST"
      | "CS"
      | "SN"
      | "Splice";
    value:
      | "8p8c"
      | "8p6c"
      | "8p4c"
      | "8p2c"
      | "6p6c"
      | "6p4c"
      | "6p2c"
      | "4p4c"
      | "4p2c"
      | "gg45"
      | "tera-4p"
      | "tera-2p"
      | "tera-1p"
      | "110-punch"
      | "bnc"
      | "f"
      | "n"
      | "mrj21"
      | "fc"
      | "lc"
      | "lc-apc"
      | "lsh"
      | "lsh-apc"
      | "mpo"
      | "mtrj"
      | "sc"
      | "sc-apc"
      | "st"
      | "cs"
      | "sn"
      | "splice";
  };
  /**
   * Positions
   */
  positions?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface Region {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  parent?: NestedRegion;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Site count
   */
  readonly site_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface Role {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Weight
   */
  weight?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
  /**
   * Vlan count
   */
  readonly vlan_count?: number;
}
export interface RouteTarget {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   * Route target value (formatted in accordance with RFC 4360)
   */
  name: string;
  tenant?: NestedTenant;
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface Secret {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Assigned object type
   */
  assigned_object_type: string;
  /**
   * Assigned object id
   */
  assigned_object_id: number;
  /**
   * Assigned object
   */
  readonly assigned_object?: {
    [name: string]: string;
  };
  role: NestedSecretRole;
  /**
   * Name
   */
  name?: string;
  /**
   * Plaintext
   */
  plaintext: string;
  /**
   * Hash
   */
  readonly hash?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface SecretRole {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Secret count
   */
  readonly secret_count?: number;
}
export interface SecretsSecretRoles {
  id?: string;
  name?: string;
  slug?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  limit?: number;
  offset?: number;
}
export interface SecretsSecrets {
  id?: string;
  name?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  role_id?: string;
  role?: string;
  device?: string;
  device_id?: string;
  virtual_machine?: string;
  virtual_machine_id?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  role_id__n?: string;
  role__n?: string;
  device__n?: string;
  device_id__n?: string;
  virtual_machine__n?: string;
  virtual_machine_id__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface Service {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  device?: NestedDevice;
  virtual_machine?: NestedVirtualMachine;
  /**
   * Name
   */
  name: string;
  ports: number[];
  /**
   * Protocol
   */
  protocol?: {
    label: "TCP" | "UDP";
    value: "tcp" | "udp";
  };
  ipaddresses?: NestedIPAddress[];
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface Site {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Status
   */
  status?: {
    label: "Planned" | "Staging" | "Active" | "Decommissioning" | "Retired";
    value: "planned" | "staging" | "active" | "decommissioning" | "retired";
  };
  region?: NestedRegion;
  group?: NestedSiteGroup;
  tenant?: NestedTenant;
  /**
   * Facility
   * Local facility ID or description
   */
  facility?: string;
  /**
   * ASN
   * 32-bit autonomous system number
   */
  asn?: number;
  /**
   * Time zone
   */
  time_zone?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Physical address
   */
  physical_address?: string;
  /**
   * Shipping address
   */
  shipping_address?: string;
  /**
   * Latitude
   * GPS coordinate (latitude)
   */
  latitude?: string; // decimal
  /**
   * Longitude
   * GPS coordinate (longitude)
   */
  longitude?: string; // decimal
  /**
   * Contact name
   */
  contact_name?: string;
  /**
   * Contact phone
   */
  contact_phone?: string;
  /**
   * Contact E-mail
   */
  contact_email?: string; // email
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Circuit count
   */
  readonly circuit_count?: number;
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
  /**
   * Rack count
   */
  readonly rack_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
  /**
   * Vlan count
   */
  readonly vlan_count?: number;
}
export interface SiteGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  parent?: NestedSiteGroup;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Site count
   */
  readonly site_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface Tag {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Color
   */
  color?: string; // ^[0-9a-f]{6}$
  /**
   * Description
   */
  description?: string;
  /**
   * Tagged items
   */
  readonly tagged_items?: number;
}
export interface TenancyTenantGroups {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  parent_id?: string;
  parent?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  parent_id__n?: string;
  parent__n?: string;
  limit?: number;
  offset?: number;
}
export interface TenancyTenants {
  id?: string;
  name?: string;
  slug?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  group_id?: string;
  group?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  group_id__n?: string;
  group__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface Tenant {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  group?: NestedTenantGroup;
  /**
   * Description
   */
  description?: string;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Circuit count
   */
  readonly circuit_count?: number;
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Ipaddress count
   */
  readonly ipaddress_count?: number;
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
  /**
   * Rack count
   */
  readonly rack_count?: number;
  /**
   * Site count
   */
  readonly site_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
  /**
   * Vlan count
   */
  readonly vlan_count?: number;
  /**
   * Vrf count
   */
  readonly vrf_count?: number;
  /**
   * Cluster count
   */
  readonly cluster_count?: number;
}
export interface TenantGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  parent?: NestedTenantGroup;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Tenant count
   */
  readonly tenant_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface User {
  /**
   * ID
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   */
  username: string; // ^[\w.@+-]+$
  /**
   * Password
   */
  password: string;
  /**
   * First name
   */
  first_name?: string;
  /**
   * Last name
   */
  last_name?: string;
  /**
   * Email address
   */
  email?: string; // email
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
  /**
   * Active
   * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
   */
  is_active?: boolean;
  /**
   * Date joined
   */
  date_joined?: string; // date-time
  groups?: NestedGroup[];
}
export interface UsersGroups {
  id?: string;
  name?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  limit?: number;
  offset?: number;
}
export interface UsersPermissions {
  id?: string;
  name?: string;
  enabled?: string;
  object_types?: string;
  user_id?: string;
  user?: string;
  group_id?: string;
  group?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  object_types__n?: string;
  user_id__n?: string;
  user__n?: string;
  group_id__n?: string;
  group__n?: string;
  limit?: number;
  offset?: number;
}
export interface UsersUsers {
  id?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_staff?: string;
  is_active?: string;
  q?: string;
  group_id?: string;
  group?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  username__n?: string;
  username__ic?: string;
  username__nic?: string;
  username__iew?: string;
  username__niew?: string;
  username__isw?: string;
  username__nisw?: string;
  username__ie?: string;
  username__nie?: string;
  username__empty?: string;
  first_name__n?: string;
  first_name__ic?: string;
  first_name__nic?: string;
  first_name__iew?: string;
  first_name__niew?: string;
  first_name__isw?: string;
  first_name__nisw?: string;
  first_name__ie?: string;
  first_name__nie?: string;
  first_name__empty?: string;
  last_name__n?: string;
  last_name__ic?: string;
  last_name__nic?: string;
  last_name__iew?: string;
  last_name__niew?: string;
  last_name__isw?: string;
  last_name__nisw?: string;
  last_name__ie?: string;
  last_name__nie?: string;
  last_name__empty?: string;
  email__n?: string;
  email__ic?: string;
  email__nic?: string;
  email__iew?: string;
  email__niew?: string;
  email__isw?: string;
  email__nisw?: string;
  email__ie?: string;
  email__nie?: string;
  email__empty?: string;
  group_id__n?: string;
  group__n?: string;
  limit?: number;
  offset?: number;
}
export interface VLAN {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  site?: NestedSite;
  group?: NestedVLANGroup;
  /**
   * ID
   */
  vid: number;
  /**
   * Name
   */
  name: string;
  tenant?: NestedTenant;
  /**
   * Status
   */
  status?: {
    label: "Active" | "Reserved" | "Deprecated";
    value: "active" | "reserved" | "deprecated";
  };
  role?: NestedRole;
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
}
export interface VLANGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Scope type
   */
  scope_type?: string;
  /**
   * Scope id
   */
  scope_id?: number;
  /**
   * Scope
   */
  readonly scope?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Vlan count
   */
  readonly vlan_count?: number;
}
export interface VMInterface {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  virtual_machine: NestedVirtualMachine;
  /**
   * Name
   */
  name: string;
  /**
   * Enabled
   */
  enabled?: boolean;
  parent?: NestedVMInterface;
  /**
   * MTU
   */
  mtu?: number;
  /**
   * MAC Address
   */
  mac_address?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Mode
   */
  mode?: {
    label: "Access" | "Tagged" | "Tagged (All)";
    value: "access" | "tagged" | "tagged-all";
  };
  untagged_vlan?: NestedVLAN;
  tagged_vlans?: NestedVLAN[];
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Count ipaddresses
   */
  readonly count_ipaddresses?: number;
}
export interface VRF {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Route distinguisher
   * Unique route distinguisher (as defined in RFC 4364)
   */
  rd?: string;
  tenant?: NestedTenant;
  /**
   * Enforce unique space
   * Prevent duplicate prefixes/IP addresses within this VRF
   */
  enforce_unique?: boolean;
  /**
   * Description
   */
  description?: string;
  import_targets?: NestedRouteTarget[];
  export_targets?: NestedRouteTarget[];
  tags?: NestedTag[];
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Ipaddress count
   */
  readonly ipaddress_count?: number;
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
}
export interface VirtualChassis {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Domain
   */
  domain?: string;
  master?: NestedDevice;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Member count
   */
  readonly member_count?: number;
}
export interface VirtualMachineWithConfigContext {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Status
   */
  status?: {
    label:
      | "Offline"
      | "Active"
      | "Planned"
      | "Staged"
      | "Failed"
      | "Decommissioning";
    value:
      | "offline"
      | "active"
      | "planned"
      | "staged"
      | "failed"
      | "decommissioning";
  };
  site?: NestedSite;
  cluster: NestedCluster;
  role?: NestedDeviceRole;
  tenant?: NestedTenant;
  platform?: NestedPlatform;
  primary_ip?: NestedIPAddress;
  primary_ip4?: NestedIPAddress;
  primary_ip6?: NestedIPAddress;
  /**
   * VCPUs
   */
  vcpus?: string; // decimal
  /**
   * Memory (MB)
   */
  memory?: number;
  /**
   * Disk (GB)
   */
  disk?: number;
  /**
   * Comments
   */
  comments?: string;
  /**
   * Local context data
   */
  local_context_data?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Config context
   */
  readonly config_context?: {
    [name: string]: string;
  };
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface VirtualizationClusterGroups {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  limit?: number;
  offset?: number;
}
export interface VirtualizationClusterTypes {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  slug__n?: string;
  slug__ic?: string;
  slug__nic?: string;
  slug__iew?: string;
  slug__niew?: string;
  slug__isw?: string;
  slug__nisw?: string;
  slug__ie?: string;
  slug__nie?: string;
  slug__empty?: string;
  description__n?: string;
  description__ic?: string;
  description__nic?: string;
  description__iew?: string;
  description__niew?: string;
  description__isw?: string;
  description__nisw?: string;
  description__ie?: string;
  description__nie?: string;
  description__empty?: string;
  limit?: number;
  offset?: number;
}
export interface VirtualizationClusters {
  id?: string;
  name?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  q?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  group_id?: string;
  group?: string;
  type_id?: string;
  type?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  group_id__n?: string;
  group__n?: string;
  type_id__n?: string;
  type__n?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface VirtualizationInterfaces {
  id?: string;
  name?: string;
  enabled?: string;
  mtu?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  q?: string;
  cluster_id?: string;
  cluster?: string;
  virtual_machine_id?: string;
  virtual_machine?: string;
  parent_id?: string;
  mac_address?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  mtu__n?: string;
  mtu__lte?: string;
  mtu__lt?: string;
  mtu__gte?: string;
  mtu__gt?: string;
  cluster_id__n?: string;
  cluster__n?: string;
  virtual_machine_id__n?: string;
  virtual_machine__n?: string;
  parent_id__n?: string;
  mac_address__n?: string;
  mac_address__ic?: string;
  mac_address__nic?: string;
  mac_address__iew?: string;
  mac_address__niew?: string;
  mac_address__isw?: string;
  mac_address__nisw?: string;
  mac_address__ie?: string;
  mac_address__nie?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface VirtualizationVirtualMachines {
  id?: string;
  name?: string;
  cluster?: string;
  vcpus?: string;
  memory?: string;
  disk?: string;
  created?: string;
  created__gte?: string;
  created__lte?: string;
  last_updated?: string;
  last_updated__gte?: string;
  last_updated__lte?: string;
  tenant_group_id?: string;
  tenant_group?: string;
  tenant_id?: string;
  tenant?: string;
  local_context_data?: string;
  q?: string;
  status?: string;
  cluster_group_id?: string;
  cluster_group?: string;
  cluster_type_id?: string;
  cluster_type?: string;
  cluster_id?: string;
  region_id?: string;
  region?: string;
  site_group_id?: string;
  site_group?: string;
  site_id?: string;
  site?: string;
  role_id?: string;
  role?: string;
  platform_id?: string;
  platform?: string;
  mac_address?: string;
  has_primary_ip?: string;
  tag?: string;
  id__n?: string;
  id__lte?: string;
  id__lt?: string;
  id__gte?: string;
  id__gt?: string;
  name__n?: string;
  name__ic?: string;
  name__nic?: string;
  name__iew?: string;
  name__niew?: string;
  name__isw?: string;
  name__nisw?: string;
  name__ie?: string;
  name__nie?: string;
  name__empty?: string;
  cluster__n?: string;
  vcpus__n?: string;
  vcpus__lte?: string;
  vcpus__lt?: string;
  vcpus__gte?: string;
  vcpus__gt?: string;
  memory__n?: string;
  memory__lte?: string;
  memory__lt?: string;
  memory__gte?: string;
  memory__gt?: string;
  disk__n?: string;
  disk__lte?: string;
  disk__lt?: string;
  disk__gte?: string;
  disk__gt?: string;
  tenant_group_id__n?: string;
  tenant_group__n?: string;
  tenant_id__n?: string;
  tenant__n?: string;
  status__n?: string;
  cluster_group_id__n?: string;
  cluster_group__n?: string;
  cluster_type_id__n?: string;
  cluster_type__n?: string;
  cluster_id__n?: string;
  region_id__n?: string;
  region__n?: string;
  site_group_id__n?: string;
  site_group__n?: string;
  site_id__n?: string;
  site__n?: string;
  role_id__n?: string;
  role__n?: string;
  platform_id__n?: string;
  platform__n?: string;
  mac_address__n?: string;
  mac_address__ic?: string;
  mac_address__nic?: string;
  mac_address__iew?: string;
  mac_address__niew?: string;
  mac_address__isw?: string;
  mac_address__nisw?: string;
  mac_address__ie?: string;
  mac_address__nie?: string;
  tag__n?: string;
  limit?: number;
  offset?: number;
}
export interface Webhook {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  content_types: string[];
  /**
   * Name
   */
  name: string;
  /**
   * Type create
   * Call this webhook when a matching object is created.
   */
  type_create?: boolean;
  /**
   * Type update
   * Call this webhook when a matching object is updated.
   */
  type_update?: boolean;
  /**
   * Type delete
   * Call this webhook when a matching object is deleted.
   */
  type_delete?: boolean;
  /**
   * URL
   * A POST will be sent to this URL when the webhook is called.
   */
  payload_url: string;
  /**
   * Enabled
   */
  enabled?: boolean;
  /**
   * HTTP method
   */
  http_method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  /**
   * HTTP content type
   * The complete list of official content types is available <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">here</a>.
   */
  http_content_type?: string;
  /**
   * Additional headers
   * User-supplied HTTP headers to be sent with the request in addition to the HTTP content type. Headers should be defined in the format <code>Name: Value</code>. Jinja2 template processing is support with the same context as the request body (below).
   */
  additional_headers?: string;
  /**
   * Body template
   * Jinja2 template for a custom request body. If blank, a JSON object representing the change will be included. Available context data includes: <code>event</code>, <code>model</code>, <code>timestamp</code>, <code>username</code>, <code>request_id</code>, and <code>data</code>.
   */
  body_template?: string;
  /**
   * Secret
   * When provided, the request will include a 'X-Hook-Signature' header containing a HMAC hex digest of the payload body using the secret as the key. The secret is not transmitted in the request.
   */
  secret?: string;
  /**
   * SSL verification
   * Enable SSL certificate verification. Disable with caution!
   */
  ssl_verification?: boolean;
  /**
   * CA File Path
   * The specific CA certificate file to use for SSL verification. Leave blank to use the system defaults.
   */
  ca_file_path?: string;
}
export interface WritableAggregate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Family
   */
  readonly family?: string;
  /**
   * Prefix
   */
  prefix: string;
  /**
   * RIR
   */
  rir: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Date added
   */
  date_added?: string; // date
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableCable {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Termination a type
   */
  termination_a_type: string;
  /**
   * Termination a id
   */
  termination_a_id: number;
  /**
   * Termination a
   */
  readonly termination_a?: {
    [name: string]: string;
  };
  /**
   * Termination b type
   */
  termination_b_type: string;
  /**
   * Termination b id
   */
  termination_b_id: number;
  /**
   * Termination b
   */
  readonly termination_b?: {
    [name: string]: string;
  };
  /**
   * Type
   */
  type?:
    | "cat3"
    | "cat5"
    | "cat5e"
    | "cat6"
    | "cat6a"
    | "cat7"
    | "cat7a"
    | "cat8"
    | "dac-active"
    | "dac-passive"
    | "mrj21-trunk"
    | "coaxial"
    | "mmf"
    | "mmf-om1"
    | "mmf-om2"
    | "mmf-om3"
    | "mmf-om4"
    | "mmf-om5"
    | "smf"
    | "smf-os1"
    | "smf-os2"
    | "aoc"
    | "power";
  /**
   * Status
   */
  status?: "connected" | "planned" | "decommissioning";
  /**
   * Label
   */
  label?: string;
  /**
   * Color
   */
  color?: string; // ^[0-9a-f]{6}$
  /**
   * Length
   */
  length?: number;
  /**
   * Length unit
   */
  length_unit?: "m" | "cm" | "ft" | "in";
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
}
export interface WritableCircuit {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Circuit ID
   */
  cid: string;
  /**
   * Provider
   */
  provider: number;
  /**
   * Type
   */
  type: number;
  /**
   * Status
   */
  status?:
    | "planned"
    | "provisioning"
    | "active"
    | "offline"
    | "deprovisioning"
    | "decommissioned";
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Date installed
   */
  install_date?: string; // date
  /**
   * Commit rate (Kbps)
   */
  commit_rate?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Termination a
   */
  readonly termination_a?: number;
  /**
   * Termination z
   */
  readonly termination_z?: number;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableCircuitTermination {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Circuit
   */
  circuit: number;
  /**
   * Termination
   */
  term_side: "A" | "Z";
  /**
   * Site
   */
  site?: number;
  /**
   * Provider network
   */
  provider_network?: number;
  /**
   * Port speed (Kbps)
   */
  port_speed?: number;
  /**
   * Upstream speed (Kbps)
   * Upstream speed, if different from port speed
   */
  upstream_speed?: number;
  /**
   * Cross-connect ID
   */
  xconnect_id?: string;
  /**
   * Patch panel/port(s)
   */
  pp_info?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritableCluster {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Type
   */
  type: number;
  /**
   * Group
   */
  group?: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Site
   */
  site?: number;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
}
export interface WritableConfigContext {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Weight
   */
  weight?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Is active
   */
  is_active?: boolean;
  regions?: number[];
  site_groups?: number[];
  sites?: number[];
  device_types?: number[];
  roles?: number[];
  platforms?: number[];
  cluster_groups?: number[];
  clusters?: number[];
  tenant_groups?: number[];
  tenants?: number[];
  tags?: string /* slug ^[-a-zA-Z0-9_]+$ */[];
  /**
   * Data
   */
  data: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableConsolePort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   * Physical port type
   */
  type?:
    | "de-9"
    | "db-25"
    | "rj-11"
    | "rj-12"
    | "rj-45"
    | "usb-a"
    | "usb-b"
    | "usb-c"
    | "usb-mini-a"
    | "usb-mini-b"
    | "usb-micro-a"
    | "usb-micro-b"
    | "other";
  /**
   * Speed
   * Port speed in bits per second
   */
  speed?: 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritableConsolePortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?:
    | "de-9"
    | "db-25"
    | "rj-11"
    | "rj-12"
    | "rj-45"
    | "usb-a"
    | "usb-b"
    | "usb-c"
    | "usb-mini-a"
    | "usb-mini-b"
    | "usb-micro-a"
    | "usb-micro-b"
    | "other";
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableConsoleServerPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   * Physical port type
   */
  type?:
    | "de-9"
    | "db-25"
    | "rj-11"
    | "rj-12"
    | "rj-45"
    | "usb-a"
    | "usb-b"
    | "usb-c"
    | "usb-mini-a"
    | "usb-mini-b"
    | "usb-micro-a"
    | "usb-micro-b"
    | "other";
  /**
   * Speed
   * Port speed in bits per second
   */
  speed?: 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritableConsoleServerPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?:
    | "de-9"
    | "db-25"
    | "rj-11"
    | "rj-12"
    | "rj-45"
    | "usb-a"
    | "usb-b"
    | "usb-c"
    | "usb-mini-a"
    | "usb-mini-b"
    | "usb-micro-a"
    | "usb-micro-b"
    | "other";
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableCustomField {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  content_types: string[];
  /**
   * Type
   */
  type?:
    | "text"
    | "integer"
    | "boolean"
    | "date"
    | "url"
    | "select"
    | "multiselect";
  /**
   * Name
   * Internal field name
   */
  name: string;
  /**
   * Label
   * Name of the field as displayed to users (if not provided, the field's name will be used)
   */
  label?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Required
   * If true, this field is required when creating new objects or editing an existing object.
   */
  required?: boolean;
  /**
   * Filter logic
   * Loose matches any instance of a given string; exact matches the entire field.
   */
  filter_logic?: "disabled" | "loose" | "exact";
  /**
   * Default
   * Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. "Foo").
   */
  default?: string;
  /**
   * Weight
   * Fields with higher weights appear lower in a form.
   */
  weight?: number;
  /**
   * Minimum value
   * Minimum allowed value (for numeric fields)
   */
  validation_minimum?: number;
  /**
   * Maximum value
   * Maximum allowed value (for numeric fields)
   */
  validation_maximum?: number;
  /**
   * Validation regex
   * Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.
   */
  validation_regex?: string;
  /**
   * Comma-separated list of available choices (for selection fields)
   */
  choices?: string[];
}
export interface WritableDeviceBay {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Installed device
   */
  installed_device?: number;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableDeviceBayTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableDeviceType {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Manufacturer
   */
  manufacturer: number;
  /**
   * Model
   */
  model: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Part number
   * Discrete part number (optional)
   */
  part_number?: string;
  /**
   * Height (U)
   */
  u_height?: number;
  /**
   * Is full depth
   * Device consumes both front and rear rack faces
   */
  is_full_depth?: boolean;
  /**
   * Parent/child status
   * Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child.
   */
  subdevice_role?: "parent" | "child";
  /**
   * Front image
   */
  readonly front_image?: string; // uri
  /**
   * Rear image
   */
  readonly rear_image?: string; // uri
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
}
export interface WritableDeviceWithConfigContext {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name?: string;
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Device role
   */
  device_role: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Platform
   */
  platform?: number;
  /**
   * Serial number
   */
  serial?: string;
  /**
   * Asset tag
   * A unique tag used to identify this device
   */
  asset_tag?: string;
  /**
   * Site
   */
  site: number;
  /**
   * Location
   */
  location?: number;
  /**
   * Rack
   */
  rack?: number;
  /**
   * Position (U)
   * The lowest-numbered unit occupied by the device
   */
  position?: number;
  /**
   * Rack face
   */
  face?: "front" | "rear";
  parent_device?: NestedDevice;
  /**
   * Status
   */
  status?:
    | "offline"
    | "active"
    | "planned"
    | "staged"
    | "failed"
    | "inventory"
    | "decommissioning";
  /**
   * Primary ip
   */
  readonly primary_ip?: string;
  /**
   * Primary IPv4
   */
  primary_ip4?: number;
  /**
   * Primary IPv6
   */
  primary_ip6?: number;
  /**
   * Cluster
   */
  cluster?: number;
  /**
   * Virtual chassis
   */
  virtual_chassis?: number;
  /**
   * Vc position
   */
  vc_position?: number;
  /**
   * Vc priority
   */
  vc_priority?: number;
  /**
   * Comments
   */
  comments?: string;
  /**
   * Local context data
   */
  local_context_data?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Config context
   */
  readonly config_context?: {
    [name: string]: string;
  };
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableFrontPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type:
    | "8p8c"
    | "8p6c"
    | "8p4c"
    | "8p2c"
    | "6p6c"
    | "6p4c"
    | "6p2c"
    | "4p4c"
    | "4p2c"
    | "gg45"
    | "tera-4p"
    | "tera-2p"
    | "tera-1p"
    | "110-punch"
    | "bnc"
    | "f"
    | "n"
    | "mrj21"
    | "fc"
    | "lc"
    | "lc-apc"
    | "lsh"
    | "lsh-apc"
    | "mpo"
    | "mtrj"
    | "sc"
    | "sc-apc"
    | "st"
    | "cs"
    | "sn"
    | "splice";
  /**
   * Rear port
   */
  rear_port: number;
  /**
   * Rear port position
   */
  rear_port_position?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritableFrontPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type:
    | "8p8c"
    | "8p6c"
    | "8p4c"
    | "8p2c"
    | "6p6c"
    | "6p4c"
    | "6p2c"
    | "4p4c"
    | "4p2c"
    | "gg45"
    | "tera-4p"
    | "tera-2p"
    | "tera-1p"
    | "110-punch"
    | "bnc"
    | "f"
    | "n"
    | "mrj21"
    | "fc"
    | "lc"
    | "lc-apc"
    | "lsh"
    | "lsh-apc"
    | "mpo"
    | "mtrj"
    | "sc"
    | "sc-apc"
    | "st"
    | "cs"
    | "sn"
    | "splice";
  /**
   * Rear port
   */
  rear_port: number;
  /**
   * Rear port position
   */
  rear_port_position?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableIPAddress {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Family
   */
  readonly family?: string;
  /**
   * Address
   * IPv4 or IPv6 address (with mask)
   */
  address: string;
  /**
   * VRF
   */
  vrf?: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Status
   * The operational status of this IP
   */
  status?: "active" | "reserved" | "deprecated" | "dhcp" | "slaac";
  /**
   * Role
   * The functional role of this IP
   */
  role?:
    | "loopback"
    | "secondary"
    | "anycast"
    | "vip"
    | "vrrp"
    | "hsrp"
    | "glbp"
    | "carp";
  /**
   * Assigned object type
   */
  assigned_object_type?: string;
  /**
   * Assigned object id
   */
  assigned_object_id?: number;
  /**
   * Assigned object
   */
  readonly assigned_object?: {
    [name: string]: string;
  };
  /**
   * NAT (Inside)
   * The IP for which this address is the "outside" IP
   */
  nat_inside?: number;
  /**
   * Nat outside
   */
  readonly nat_outside?: string;
  /**
   * DNS Name
   * Hostname or FQDN (not case-sensitive)
   */
  dns_name?: string; // ^[0-9A-Za-z._-]+$
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableInterface {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type:
    | "virtual"
    | "lag"
    | "100base-tx"
    | "1000base-t"
    | "2.5gbase-t"
    | "5gbase-t"
    | "10gbase-t"
    | "10gbase-cx4"
    | "1000base-x-gbic"
    | "1000base-x-sfp"
    | "10gbase-x-sfpp"
    | "10gbase-x-xfp"
    | "10gbase-x-xenpak"
    | "10gbase-x-x2"
    | "25gbase-x-sfp28"
    | "50gbase-x-sfp56"
    | "40gbase-x-qsfpp"
    | "50gbase-x-sfp28"
    | "100gbase-x-cfp"
    | "100gbase-x-cfp2"
    | "200gbase-x-cfp2"
    | "100gbase-x-cfp4"
    | "100gbase-x-cpak"
    | "100gbase-x-qsfp28"
    | "200gbase-x-qsfp56"
    | "400gbase-x-qsfpdd"
    | "400gbase-x-osfp"
    | "ieee802.11a"
    | "ieee802.11g"
    | "ieee802.11n"
    | "ieee802.11ac"
    | "ieee802.11ad"
    | "ieee802.11ax"
    | "gsm"
    | "cdma"
    | "lte"
    | "sonet-oc3"
    | "sonet-oc12"
    | "sonet-oc48"
    | "sonet-oc192"
    | "sonet-oc768"
    | "sonet-oc1920"
    | "sonet-oc3840"
    | "1gfc-sfp"
    | "2gfc-sfp"
    | "4gfc-sfp"
    | "8gfc-sfpp"
    | "16gfc-sfpp"
    | "32gfc-sfp28"
    | "64gfc-qsfpp"
    | "128gfc-sfp28"
    | "infiniband-sdr"
    | "infiniband-ddr"
    | "infiniband-qdr"
    | "infiniband-fdr10"
    | "infiniband-fdr"
    | "infiniband-edr"
    | "infiniband-hdr"
    | "infiniband-ndr"
    | "infiniband-xdr"
    | "t1"
    | "e1"
    | "t3"
    | "e3"
    | "cisco-stackwise"
    | "cisco-stackwise-plus"
    | "cisco-flexstack"
    | "cisco-flexstack-plus"
    | "juniper-vcp"
    | "extreme-summitstack"
    | "extreme-summitstack-128"
    | "extreme-summitstack-256"
    | "extreme-summitstack-512"
    | "other";
  /**
   * Enabled
   */
  enabled?: boolean;
  /**
   * Parent interface
   */
  parent?: number;
  /**
   * Parent LAG
   */
  lag?: number;
  /**
   * MTU
   */
  mtu?: number;
  /**
   * MAC Address
   */
  mac_address?: string;
  /**
   * Management only
   * This interface is used only for out-of-band management
   */
  mgmt_only?: boolean;
  /**
   * Description
   */
  description?: string;
  /**
   * Mode
   */
  mode?: "access" | "tagged" | "tagged-all";
  /**
   * Untagged VLAN
   */
  untagged_vlan?: number;
  tagged_vlans?: number[];
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Count ipaddresses
   */
  readonly count_ipaddresses?: number;
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritableInterfaceTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type:
    | "virtual"
    | "lag"
    | "100base-tx"
    | "1000base-t"
    | "2.5gbase-t"
    | "5gbase-t"
    | "10gbase-t"
    | "10gbase-cx4"
    | "1000base-x-gbic"
    | "1000base-x-sfp"
    | "10gbase-x-sfpp"
    | "10gbase-x-xfp"
    | "10gbase-x-xenpak"
    | "10gbase-x-x2"
    | "25gbase-x-sfp28"
    | "50gbase-x-sfp56"
    | "40gbase-x-qsfpp"
    | "50gbase-x-sfp28"
    | "100gbase-x-cfp"
    | "100gbase-x-cfp2"
    | "200gbase-x-cfp2"
    | "100gbase-x-cfp4"
    | "100gbase-x-cpak"
    | "100gbase-x-qsfp28"
    | "200gbase-x-qsfp56"
    | "400gbase-x-qsfpdd"
    | "400gbase-x-osfp"
    | "ieee802.11a"
    | "ieee802.11g"
    | "ieee802.11n"
    | "ieee802.11ac"
    | "ieee802.11ad"
    | "ieee802.11ax"
    | "gsm"
    | "cdma"
    | "lte"
    | "sonet-oc3"
    | "sonet-oc12"
    | "sonet-oc48"
    | "sonet-oc192"
    | "sonet-oc768"
    | "sonet-oc1920"
    | "sonet-oc3840"
    | "1gfc-sfp"
    | "2gfc-sfp"
    | "4gfc-sfp"
    | "8gfc-sfpp"
    | "16gfc-sfpp"
    | "32gfc-sfp28"
    | "64gfc-qsfpp"
    | "128gfc-sfp28"
    | "infiniband-sdr"
    | "infiniband-ddr"
    | "infiniband-qdr"
    | "infiniband-fdr10"
    | "infiniband-fdr"
    | "infiniband-edr"
    | "infiniband-hdr"
    | "infiniband-ndr"
    | "infiniband-xdr"
    | "t1"
    | "e1"
    | "t3"
    | "e3"
    | "cisco-stackwise"
    | "cisco-stackwise-plus"
    | "cisco-flexstack"
    | "cisco-flexstack-plus"
    | "juniper-vcp"
    | "extreme-summitstack"
    | "extreme-summitstack-128"
    | "extreme-summitstack-256"
    | "extreme-summitstack-512"
    | "other";
  /**
   * Management only
   */
  mgmt_only?: boolean;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableInventoryItem {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Parent
   */
  parent?: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Manufacturer
   */
  manufacturer?: number;
  /**
   * Part ID
   * Manufacturer-assigned part identifier
   */
  part_id?: string;
  /**
   * Serial number
   */
  serial?: string;
  /**
   * Asset tag
   * A unique tag used to identify this item
   */
  asset_tag?: string;
  /**
   * Discovered
   * This item was automatically discovered
   */
  discovered?: boolean;
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface WritableJournalEntry {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Assigned object type
   */
  assigned_object_type: string;
  /**
   * Assigned object id
   */
  assigned_object_id: number;
  /**
   * Assigned object
   */
  readonly assigned_object?: {
    [name: string]: string;
  };
  /**
   * Created
   */
  readonly created?: string; // date-time
  /**
   * Created by
   */
  created_by?: number;
  /**
   * Kind
   */
  kind?: "info" | "success" | "warning" | "danger";
  /**
   * Comments
   */
  comments: string;
}
export interface WritableLocation {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Site
   */
  site: number;
  /**
   * Parent
   */
  parent?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Rack count
   */
  readonly rack_count?: number;
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface WritableObjectPermission {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Enabled
   */
  enabled?: boolean;
  object_types: string[];
  groups?: number[];
  users?: number[];
  /**
   * The list of actions granted by this permission
   */
  actions: string[];
  /**
   * Constraints
   * Queryset filter matching the applicable objects of the selected type(s)
   */
  constraints?: string;
}
export interface WritablePlatform {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Manufacturer
   * Optionally limit this platform to devices of a certain manufacturer
   */
  manufacturer?: number;
  /**
   * NAPALM driver
   * The name of the NAPALM driver to use when interacting with devices
   */
  napalm_driver?: string;
  /**
   * NAPALM arguments
   * Additional arguments to pass when initiating the NAPALM driver (JSON format)
   */
  napalm_args?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
}
export interface WritablePowerFeed {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Power panel
   */
  power_panel: number;
  /**
   * Rack
   */
  rack?: number;
  /**
   * Name
   */
  name: string;
  /**
   * Status
   */
  status?: "offline" | "active" | "planned" | "failed";
  /**
   * Type
   */
  type?: "primary" | "redundant";
  /**
   * Supply
   */
  supply?: "ac" | "dc";
  /**
   * Phase
   */
  phase?: "single-phase" | "three-phase";
  /**
   * Voltage
   */
  voltage?: number;
  /**
   * Amperage
   */
  amperage?: number;
  /**
   * Max utilization
   * Maximum permissible draw (percentage)
   */
  max_utilization?: number;
  /**
   * Comments
   */
  comments?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritablePowerOutlet {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   * Physical port type
   */
  type?:
    | "iec-60320-c5"
    | "iec-60320-c7"
    | "iec-60320-c13"
    | "iec-60320-c15"
    | "iec-60320-c19"
    | "iec-60309-p-n-e-4h"
    | "iec-60309-p-n-e-6h"
    | "iec-60309-p-n-e-9h"
    | "iec-60309-2p-e-4h"
    | "iec-60309-2p-e-6h"
    | "iec-60309-2p-e-9h"
    | "iec-60309-3p-e-4h"
    | "iec-60309-3p-e-6h"
    | "iec-60309-3p-e-9h"
    | "iec-60309-3p-n-e-4h"
    | "iec-60309-3p-n-e-6h"
    | "iec-60309-3p-n-e-9h"
    | "nema-1-15r"
    | "nema-5-15r"
    | "nema-5-20r"
    | "nema-5-30r"
    | "nema-5-50r"
    | "nema-6-15r"
    | "nema-6-20r"
    | "nema-6-30r"
    | "nema-6-50r"
    | "nema-10-30r"
    | "nema-10-50r"
    | "nema-14-20r"
    | "nema-14-30r"
    | "nema-14-50r"
    | "nema-14-60r"
    | "nema-15-15r"
    | "nema-15-20r"
    | "nema-15-30r"
    | "nema-15-50r"
    | "nema-15-60r"
    | "nema-l1-15r"
    | "nema-l5-15r"
    | "nema-l5-20r"
    | "nema-l5-30r"
    | "nema-l5-50r"
    | "nema-l6-15r"
    | "nema-l6-20r"
    | "nema-l6-30r"
    | "nema-l6-50r"
    | "nema-l10-30r"
    | "nema-l14-20r"
    | "nema-l14-30r"
    | "nema-l14-50r"
    | "nema-l14-60r"
    | "nema-l15-20r"
    | "nema-l15-30r"
    | "nema-l15-50r"
    | "nema-l15-60r"
    | "nema-l21-20r"
    | "nema-l21-30r"
    | "CS6360C"
    | "CS6364C"
    | "CS8164C"
    | "CS8264C"
    | "CS8364C"
    | "CS8464C"
    | "ita-e"
    | "ita-f"
    | "ita-g"
    | "ita-h"
    | "ita-i"
    | "ita-j"
    | "ita-k"
    | "ita-l"
    | "ita-m"
    | "ita-n"
    | "ita-o"
    | "usb-a"
    | "usb-micro-b"
    | "usb-c"
    | "dc-terminal"
    | "hdot-cx"
    | "saf-d-grid";
  /**
   * Power port
   */
  power_port?: number;
  /**
   * Feed leg
   * Phase (for three-phase feeds)
   */
  feed_leg?: "A" | "B" | "C";
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritablePowerOutletTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?:
    | "iec-60320-c5"
    | "iec-60320-c7"
    | "iec-60320-c13"
    | "iec-60320-c15"
    | "iec-60320-c19"
    | "iec-60309-p-n-e-4h"
    | "iec-60309-p-n-e-6h"
    | "iec-60309-p-n-e-9h"
    | "iec-60309-2p-e-4h"
    | "iec-60309-2p-e-6h"
    | "iec-60309-2p-e-9h"
    | "iec-60309-3p-e-4h"
    | "iec-60309-3p-e-6h"
    | "iec-60309-3p-e-9h"
    | "iec-60309-3p-n-e-4h"
    | "iec-60309-3p-n-e-6h"
    | "iec-60309-3p-n-e-9h"
    | "nema-1-15r"
    | "nema-5-15r"
    | "nema-5-20r"
    | "nema-5-30r"
    | "nema-5-50r"
    | "nema-6-15r"
    | "nema-6-20r"
    | "nema-6-30r"
    | "nema-6-50r"
    | "nema-10-30r"
    | "nema-10-50r"
    | "nema-14-20r"
    | "nema-14-30r"
    | "nema-14-50r"
    | "nema-14-60r"
    | "nema-15-15r"
    | "nema-15-20r"
    | "nema-15-30r"
    | "nema-15-50r"
    | "nema-15-60r"
    | "nema-l1-15r"
    | "nema-l5-15r"
    | "nema-l5-20r"
    | "nema-l5-30r"
    | "nema-l5-50r"
    | "nema-l6-15r"
    | "nema-l6-20r"
    | "nema-l6-30r"
    | "nema-l6-50r"
    | "nema-l10-30r"
    | "nema-l14-20r"
    | "nema-l14-30r"
    | "nema-l14-50r"
    | "nema-l14-60r"
    | "nema-l15-20r"
    | "nema-l15-30r"
    | "nema-l15-50r"
    | "nema-l15-60r"
    | "nema-l21-20r"
    | "nema-l21-30r"
    | "CS6360C"
    | "CS6364C"
    | "CS8164C"
    | "CS8264C"
    | "CS8364C"
    | "CS8464C"
    | "ita-e"
    | "ita-f"
    | "ita-g"
    | "ita-h"
    | "ita-i"
    | "ita-j"
    | "ita-k"
    | "ita-l"
    | "ita-m"
    | "ita-n"
    | "ita-o"
    | "usb-a"
    | "usb-micro-b"
    | "usb-c"
    | "dc-terminal"
    | "hdot-cx"
    | "saf-d-grid";
  /**
   * Power port
   */
  power_port?: number;
  /**
   * Feed leg
   * Phase (for three-phase feeds)
   */
  feed_leg?: "A" | "B" | "C";
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritablePowerPanel {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Site
   */
  site: number;
  /**
   * Location
   */
  location?: number;
  /**
   * Name
   */
  name: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Powerfeed count
   */
  readonly powerfeed_count?: number;
}
export interface WritablePowerPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   * Physical port type
   */
  type?:
    | "iec-60320-c6"
    | "iec-60320-c8"
    | "iec-60320-c14"
    | "iec-60320-c16"
    | "iec-60320-c20"
    | "iec-60309-p-n-e-4h"
    | "iec-60309-p-n-e-6h"
    | "iec-60309-p-n-e-9h"
    | "iec-60309-2p-e-4h"
    | "iec-60309-2p-e-6h"
    | "iec-60309-2p-e-9h"
    | "iec-60309-3p-e-4h"
    | "iec-60309-3p-e-6h"
    | "iec-60309-3p-e-9h"
    | "iec-60309-3p-n-e-4h"
    | "iec-60309-3p-n-e-6h"
    | "iec-60309-3p-n-e-9h"
    | "nema-1-15p"
    | "nema-5-15p"
    | "nema-5-20p"
    | "nema-5-30p"
    | "nema-5-50p"
    | "nema-6-15p"
    | "nema-6-20p"
    | "nema-6-30p"
    | "nema-6-50p"
    | "nema-10-30p"
    | "nema-10-50p"
    | "nema-14-20p"
    | "nema-14-30p"
    | "nema-14-50p"
    | "nema-14-60p"
    | "nema-15-15p"
    | "nema-15-20p"
    | "nema-15-30p"
    | "nema-15-50p"
    | "nema-15-60p"
    | "nema-l1-15p"
    | "nema-l5-15p"
    | "nema-l5-20p"
    | "nema-l5-30p"
    | "nema-l5-50p"
    | "nema-l6-15p"
    | "nema-l6-20p"
    | "nema-l6-30p"
    | "nema-l6-50p"
    | "nema-l10-30p"
    | "nema-l14-20p"
    | "nema-l14-30p"
    | "nema-l14-50p"
    | "nema-l14-60p"
    | "nema-l15-20p"
    | "nema-l15-30p"
    | "nema-l15-50p"
    | "nema-l15-60p"
    | "nema-l21-20p"
    | "nema-l21-30p"
    | "cs6361c"
    | "cs6365c"
    | "cs8165c"
    | "cs8265c"
    | "cs8365c"
    | "cs8465c"
    | "ita-e"
    | "ita-f"
    | "ita-ef"
    | "ita-g"
    | "ita-h"
    | "ita-i"
    | "ita-j"
    | "ita-k"
    | "ita-l"
    | "ita-m"
    | "ita-n"
    | "ita-o"
    | "usb-a"
    | "usb-b"
    | "usb-c"
    | "usb-mini-a"
    | "usb-mini-b"
    | "usb-micro-a"
    | "usb-micro-b"
    | "usb-3-b"
    | "usb-3-micro-b"
    | "dc-terminal"
    | "saf-d-grid"
    | "hardwired";
  /**
   * Maximum draw
   * Maximum power draw (watts)
   */
  maximum_draw?: number;
  /**
   * Allocated draw
   * Allocated power draw (watts)
   */
  allocated_draw?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  /**
   * Connected endpoint
   *
   * Return the appropriate serializer for the type of connected object.
   *
   */
  readonly connected_endpoint?: {
    [name: string]: string;
  };
  /**
   * Connected endpoint type
   */
  readonly connected_endpoint_type?: string;
  /**
   * Connected endpoint reachable
   */
  readonly connected_endpoint_reachable?: boolean;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritablePowerPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type?:
    | "iec-60320-c6"
    | "iec-60320-c8"
    | "iec-60320-c14"
    | "iec-60320-c16"
    | "iec-60320-c20"
    | "iec-60309-p-n-e-4h"
    | "iec-60309-p-n-e-6h"
    | "iec-60309-p-n-e-9h"
    | "iec-60309-2p-e-4h"
    | "iec-60309-2p-e-6h"
    | "iec-60309-2p-e-9h"
    | "iec-60309-3p-e-4h"
    | "iec-60309-3p-e-6h"
    | "iec-60309-3p-e-9h"
    | "iec-60309-3p-n-e-4h"
    | "iec-60309-3p-n-e-6h"
    | "iec-60309-3p-n-e-9h"
    | "nema-1-15p"
    | "nema-5-15p"
    | "nema-5-20p"
    | "nema-5-30p"
    | "nema-5-50p"
    | "nema-6-15p"
    | "nema-6-20p"
    | "nema-6-30p"
    | "nema-6-50p"
    | "nema-10-30p"
    | "nema-10-50p"
    | "nema-14-20p"
    | "nema-14-30p"
    | "nema-14-50p"
    | "nema-14-60p"
    | "nema-15-15p"
    | "nema-15-20p"
    | "nema-15-30p"
    | "nema-15-50p"
    | "nema-15-60p"
    | "nema-l1-15p"
    | "nema-l5-15p"
    | "nema-l5-20p"
    | "nema-l5-30p"
    | "nema-l5-50p"
    | "nema-l6-15p"
    | "nema-l6-20p"
    | "nema-l6-30p"
    | "nema-l6-50p"
    | "nema-l10-30p"
    | "nema-l14-20p"
    | "nema-l14-30p"
    | "nema-l14-50p"
    | "nema-l14-60p"
    | "nema-l15-20p"
    | "nema-l15-30p"
    | "nema-l15-50p"
    | "nema-l15-60p"
    | "nema-l21-20p"
    | "nema-l21-30p"
    | "cs6361c"
    | "cs6365c"
    | "cs8165c"
    | "cs8265c"
    | "cs8365c"
    | "cs8465c"
    | "ita-e"
    | "ita-f"
    | "ita-ef"
    | "ita-g"
    | "ita-h"
    | "ita-i"
    | "ita-j"
    | "ita-k"
    | "ita-l"
    | "ita-m"
    | "ita-n"
    | "ita-o"
    | "usb-a"
    | "usb-b"
    | "usb-c"
    | "usb-mini-a"
    | "usb-mini-b"
    | "usb-micro-a"
    | "usb-micro-b"
    | "usb-3-b"
    | "usb-3-micro-b"
    | "dc-terminal"
    | "saf-d-grid"
    | "hardwired";
  /**
   * Maximum draw
   * Maximum power draw (watts)
   */
  maximum_draw?: number;
  /**
   * Allocated draw
   * Allocated power draw (watts)
   */
  allocated_draw?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritablePrefix {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Family
   */
  readonly family?: string;
  /**
   * Prefix
   * IPv4 or IPv6 network with mask
   */
  prefix: string;
  /**
   * Site
   */
  site?: number;
  /**
   * VRF
   */
  vrf?: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * VLAN
   */
  vlan?: number;
  /**
   * Status
   * Operational status of this prefix
   */
  status?: "container" | "active" | "reserved" | "deprecated";
  /**
   * Role
   * The primary function of this prefix
   */
  role?: number;
  /**
   * Is a pool
   * All IP addresses within this prefix are considered usable
   */
  is_pool?: boolean;
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Children
   */
  readonly children?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface WritableProviderNetwork {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Provider
   */
  provider: number;
  /**
   * Name
   */
  name: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableRack {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Facility ID
   * Locally-assigned identifier
   */
  facility_id?: string;
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Site
   */
  site: number;
  /**
   * Location
   */
  location?: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Status
   */
  status?: "reserved" | "available" | "planned" | "active" | "deprecated";
  /**
   * Role
   * Functional role
   */
  role?: number;
  /**
   * Serial number
   */
  serial?: string;
  /**
   * Asset tag
   * A unique tag used to identify this rack
   */
  asset_tag?: string;
  /**
   * Type
   */
  type?:
    | "2-post-frame"
    | "4-post-frame"
    | "4-post-cabinet"
    | "wall-frame"
    | "wall-cabinet";
  /**
   * Width
   * Rail-to-rail width
   */
  width?: 10 | 19 | 21 | 23;
  /**
   * Height (U)
   * Height in rack units
   */
  u_height?: number;
  /**
   * Descending units
   * Units are numbered top-to-bottom
   */
  desc_units?: boolean;
  /**
   * Outer width
   * Outer dimension of rack (width)
   */
  outer_width?: number;
  /**
   * Outer depth
   * Outer dimension of rack (depth)
   */
  outer_depth?: number;
  /**
   * Outer unit
   */
  outer_unit?: "mm" | "in";
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Powerfeed count
   */
  readonly powerfeed_count?: number;
}
export interface WritableRackReservation {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Rack
   */
  rack: number;
  units: number[];
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * User
   */
  user: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Description
   */
  description: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
}
export interface WritableRearPort {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type:
    | "8p8c"
    | "8p6c"
    | "8p4c"
    | "8p2c"
    | "6p6c"
    | "6p4c"
    | "6p2c"
    | "4p4c"
    | "4p2c"
    | "gg45"
    | "tera-4p"
    | "tera-2p"
    | "tera-1p"
    | "110-punch"
    | "bnc"
    | "f"
    | "n"
    | "mrj21"
    | "fc"
    | "lc"
    | "lc-apc"
    | "lsh"
    | "lsh-apc"
    | "mpo"
    | "mtrj"
    | "sc"
    | "sc-apc"
    | "st"
    | "cs"
    | "sn"
    | "splice";
  /**
   * Positions
   */
  positions?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Mark connected
   * Treat as if a cable is connected
   */
  mark_connected?: boolean;
  cable?: NestedCable;
  /**
   * Cable peer
   *
   * Return the appropriate serializer for the cable termination model.
   *
   */
  readonly cable_peer?: {
    [name: string]: string;
  };
  /**
   * Cable peer type
   */
  readonly cable_peer_type?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * occupied
   */
  readonly _occupied?: boolean;
}
export interface WritableRearPortTemplate {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device type
   */
  device_type: number;
  /**
   * Name
   */
  name: string;
  /**
   * Label
   * Physical label
   */
  label?: string;
  /**
   * Type
   */
  type:
    | "8p8c"
    | "8p6c"
    | "8p4c"
    | "8p2c"
    | "6p6c"
    | "6p4c"
    | "6p2c"
    | "4p4c"
    | "4p2c"
    | "gg45"
    | "tera-4p"
    | "tera-2p"
    | "tera-1p"
    | "110-punch"
    | "bnc"
    | "f"
    | "n"
    | "mrj21"
    | "fc"
    | "lc"
    | "lc-apc"
    | "lsh"
    | "lsh-apc"
    | "mpo"
    | "mtrj"
    | "sc"
    | "sc-apc"
    | "st"
    | "cs"
    | "sn"
    | "splice";
  /**
   * Positions
   */
  positions?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableRegion {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Parent
   */
  parent?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Site count
   */
  readonly site_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface WritableRouteTarget {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   * Route target value (formatted in accordance with RFC 4360)
   */
  name: string;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableSecret {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Assigned object type
   */
  assigned_object_type: string;
  /**
   * Assigned object id
   */
  assigned_object_id: number;
  /**
   * Assigned object
   */
  readonly assigned_object?: {
    [name: string]: string;
  };
  /**
   * Role
   */
  role: number;
  /**
   * Name
   */
  name?: string;
  /**
   * Plaintext
   */
  plaintext: string;
  /**
   * Hash
   */
  readonly hash?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableService {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Device
   */
  device?: number;
  /**
   * Virtual machine
   */
  virtual_machine?: number;
  /**
   * Name
   */
  name: string;
  ports: number[];
  /**
   * Protocol
   */
  protocol: "tcp" | "udp";
  ipaddresses?: number[];
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
export interface WritableSite {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Status
   */
  status?: "planned" | "staging" | "active" | "decommissioning" | "retired";
  /**
   * Region
   */
  region?: number;
  /**
   * Group
   */
  group?: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Facility
   * Local facility ID or description
   */
  facility?: string;
  /**
   * ASN
   * 32-bit autonomous system number
   */
  asn?: number;
  /**
   * Time zone
   */
  time_zone?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Physical address
   */
  physical_address?: string;
  /**
   * Shipping address
   */
  shipping_address?: string;
  /**
   * Latitude
   * GPS coordinate (latitude)
   */
  latitude?: string; // decimal
  /**
   * Longitude
   * GPS coordinate (longitude)
   */
  longitude?: string; // decimal
  /**
   * Contact name
   */
  contact_name?: string;
  /**
   * Contact phone
   */
  contact_phone?: string;
  /**
   * Contact E-mail
   */
  contact_email?: string; // email
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Circuit count
   */
  readonly circuit_count?: number;
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
  /**
   * Rack count
   */
  readonly rack_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
  /**
   * Vlan count
   */
  readonly vlan_count?: number;
}
export interface WritableSiteGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Parent
   */
  parent?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Site count
   */
  readonly site_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface WritableTenant {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Group
   */
  group?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Comments
   */
  comments?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Circuit count
   */
  readonly circuit_count?: number;
  /**
   * Device count
   */
  readonly device_count?: number;
  /**
   * Ipaddress count
   */
  readonly ipaddress_count?: number;
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
  /**
   * Rack count
   */
  readonly rack_count?: number;
  /**
   * Site count
   */
  readonly site_count?: number;
  /**
   * Virtualmachine count
   */
  readonly virtualmachine_count?: number;
  /**
   * Vlan count
   */
  readonly vlan_count?: number;
  /**
   * Vrf count
   */
  readonly vrf_count?: number;
  /**
   * Cluster count
   */
  readonly cluster_count?: number;
}
export interface WritableTenantGroup {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Slug
   */
  slug: string; // slug ^[-a-zA-Z0-9_]+$
  /**
   * Parent
   */
  parent?: number;
  /**
   * Description
   */
  description?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Tenant count
   */
  readonly tenant_count?: number;
  /**
   * depth
   */
  readonly _depth?: number;
}
export interface WritableUser {
  /**
   * ID
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   */
  username: string; // ^[\w.@+-]+$
  /**
   * Password
   */
  password: string;
  /**
   * First name
   */
  first_name?: string;
  /**
   * Last name
   */
  last_name?: string;
  /**
   * Email address
   */
  email?: string; // email
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
  /**
   * Active
   * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
   */
  is_active?: boolean;
  /**
   * Date joined
   */
  date_joined?: string; // date-time
  /**
   * The groups this user belongs to. A user will get all permissions granted to each of their groups.
   */
  groups?: number[];
}
export interface WritableVLAN {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Site
   */
  site?: number;
  /**
   * Group
   */
  group?: number;
  /**
   * ID
   */
  vid: number;
  /**
   * Name
   */
  name: string;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Status
   */
  status?: "active" | "reserved" | "deprecated";
  /**
   * Role
   */
  role?: number;
  /**
   * Description
   */
  description?: string;
  tags?: NestedTag[];
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
}
export interface WritableVMInterface {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Virtual machine
   */
  virtual_machine: number;
  /**
   * Name
   */
  name: string;
  /**
   * Enabled
   */
  enabled?: boolean;
  /**
   * Parent interface
   */
  parent?: number;
  /**
   * MTU
   */
  mtu?: number;
  /**
   * MAC Address
   */
  mac_address?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Mode
   */
  mode?: "access" | "tagged" | "tagged-all";
  /**
   * Untagged VLAN
   */
  untagged_vlan?: number;
  tagged_vlans?: number[];
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Count ipaddresses
   */
  readonly count_ipaddresses?: number;
}
export interface WritableVRF {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Route distinguisher
   * Unique route distinguisher (as defined in RFC 4364)
   */
  rd?: string;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Enforce unique space
   * Prevent duplicate prefixes/IP addresses within this VRF
   */
  enforce_unique?: boolean;
  /**
   * Description
   */
  description?: string;
  import_targets?: number[];
  export_targets?: number[];
  tags?: NestedTag[];
  /**
   * Display name
   */
  readonly display_name?: string;
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
  /**
   * Ipaddress count
   */
  readonly ipaddress_count?: number;
  /**
   * Prefix count
   */
  readonly prefix_count?: number;
}
export interface WritableVirtualChassis {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Domain
   */
  domain?: string;
  /**
   * Master
   */
  master?: number;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Member count
   */
  readonly member_count?: number;
}
export interface WritableVirtualMachineWithConfigContext {
  /**
   * Id
   */
  readonly id?: number;
  /**
   * Url
   */
  readonly url?: string; // uri
  /**
   * Display
   */
  readonly display?: string;
  /**
   * Name
   */
  name: string;
  /**
   * Status
   */
  status?:
    | "offline"
    | "active"
    | "planned"
    | "staged"
    | "failed"
    | "decommissioning";
  /**
   * Site
   */
  readonly site?: string;
  /**
   * Cluster
   */
  cluster: number;
  /**
   * Role
   */
  role?: number;
  /**
   * Tenant
   */
  tenant?: number;
  /**
   * Platform
   */
  platform?: number;
  /**
   * Primary ip
   */
  readonly primary_ip?: string;
  /**
   * Primary IPv4
   */
  primary_ip4?: number;
  /**
   * Primary IPv6
   */
  primary_ip6?: number;
  /**
   * VCPUs
   */
  vcpus?: string; // decimal
  /**
   * Memory (MB)
   */
  memory?: number;
  /**
   * Disk (GB)
   */
  disk?: number;
  /**
   * Comments
   */
  comments?: string;
  /**
   * Local context data
   */
  local_context_data?: string;
  tags?: NestedTag[];
  /**
   * Custom fields
   */
  custom_fields?: {};
  /**
   * Config context
   */
  readonly config_context?: {
    [name: string]: string;
  };
  /**
   * Created
   */
  readonly created?: string; // date
  /**
   * Last updated
   */
  readonly last_updated?: string; // date-time
}
