import { kangwonList } from "@data/region_info/kangwon";
import { gyungkiList } from "@data/region_info/gyungki";
import { gyungnamList } from "@data/region_info/gyungnam";
import { gyungbukList } from "@data/region_info/gyungbuk";
import { gwangjuList } from "@data/region_info/gwangju";
import { daeguList } from "@data/region_info/daegu";
import { daejeonList } from "./daejeon";
import { busanList } from "./busan";
import { seoulList } from "./seoul";
import { sejongList } from "@data/region_info/sejong";
import { ulsanList } from "./ulsan";
import { incheonList } from "@data/region_info/incheon";
import { jeonnamList } from "@data/region_info/jeonnam";
import { jeonbukList } from "@data/region_info/jeonbuk";
import { jejuList } from "@data/region_info/jeju";
import { chungnamList } from "./chungnam";
import { chungbukList } from "./chungbuk";
import { globalList } from "@data/region_info/global";
/*
  const detailRegionsByCode = {
    a: [ ... ],
    b: [ ... ],
    c: [ ... ],
    ...
  };
*/

const detailRegionsByCode = {
  a: kangwonList,
  b: gyungkiList,
  c: gyungnamList,
  d: gyungbukList,
  e: gwangjuList,
  f: daeguList,
  g: daejeonList,
  h: busanList,
  i: seoulList,
  z: sejongList,
  j: ulsanList,
  k: incheonList,
  l: jeonnamList,
  n: jeonbukList,
  m: jejuList,
  o: chungnamList,
  p: chungbukList,
  q: globalList,
};

export default detailRegionsByCode;
