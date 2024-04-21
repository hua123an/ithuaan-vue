<script setup>
import {ref} from "vue"
const jetbrains = ["MXMQUYT815-eyJsaWNlbnNlSWQiOiJNWE1RVVlUODE1IiwibGljZW5zZWVOYW1lIjoiSHVuYW4gSW5zdGl0dXRlIG9mIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kiLCJhc3NpZ25lZU5hbWUiOiJqaWtlIGNvZGUiLCJhc3NpZ25lZUVtYWlsIjoiamV0YnJhaW5zMjMwMjA2QG91dGxvb2suY29tIiwibGljZW5zZVJlc3RyaWN0aW9uIjoiRm9yIGVkdWNhdGlvbmFsIHVzZSBvbmx5IiwiY2hlY2tDb25jdXJyZW50VXNlIjpmYWxzZSwicHJvZHVjdHMiOlt7ImNvZGUiOiJEUE4iLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IkRCIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJQUyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiSUkiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTQyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJHTyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiRE0iLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTRiIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJEUyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUEMiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJDIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJDTCIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiV1MiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJEIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSUzAiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJNIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJBQyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUlNWIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IkRDIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSU1UiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IkRQIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBEQiIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQV1MiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUFNJIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBQUyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQQ1dNUCIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQR08iLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUFBDIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBSQiIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQU1ciLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUlMiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6dHJ1ZX1dLCJtZXRhZGF0YSI6IjAxMjAyMzAyMDZMUEFBMDA4MDA5IiwiaGFzaCI6IjQyNTQ5NjcyLzIwMDk1Nzk5Oi03OTk2MzgyNTgiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZX0=-OXfbtL5lwz9bDhPZ0POhH6h8h1ubDm0bzkRWX33IjJlRmK4BkGzO65BWjIJ+ndT0stY8uOUWo4FM1Aej+YGXMTlyD3rcCBkcFN6dB6FEVelLYoBevxN9myhp0IGvfHaLQ6hoVxAKr0AkSAlSsgKVN6gOYw7Nn8lR/ivpuXXteZWiG4x7KCxHM/6/oPXAbQQmD1sy2q05s1tsvxBltZbsFJ3/Yv6lG89h0YlN9FvFciqUM6B1Cc5Fo7a6oUOfpyCJKPSwzyzkxLOhlL4QO6/LfQ3zNO9wirnz506mZXh3oB+wS1gDFLk7RehEQMqdqnjh+zaNKi1QKB/cyK1Op0oDTQ==-MIIETDCCAjSgAwIBAgIBDzANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTIyMTAxMDE2MDU0NFoXDTI0MTAxMTE2MDU0NFowHzEdMBsGA1UEAwwUcHJvZDJ5LWZyb20tMjAyMjEwMTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/W3uCpU5M2y48rUR/3fFR6y4xj1nOm3rIuGp2brELVGzdgK2BezjnDXpAxVDw5657hBkAUMoyByiDs2MgmVi9IcqdAwpk988/Daaajq9xuU1of59jH9eQ9c3BmsEtdA4boN3VpenYKATwmpKYkJKVc07ZKoXL6kSyZuF7Jq7HoQZcclChbF75QJPGbri3cw9vDk/e46kuzfwpGftvl6+vKibpInO6Dv0ocwImDbOutyZC7E+BwpEm1TJZW4XovMBegHhWC04cJvpH1u98xoR94ichw0jKhdppywARe43rGU96163RckIuFmFDQKZV9SMUrwpQFu4Z2D5yTNqnlLRfAgMBAAGjgZkwgZYwCQYDVR0TBAIwADAdBgNVHQ4EFgQU5FZqQ4gnVc+inIeZF+o3ID+VhcEwSAYDVR0jBEEwP4AUo562SGdCEjZBvW3gubSgUouX8bOhHKQaMBgxFjAUBgNVBAMMDUpldFByb2ZpbGUgQ0GCCQDSbLGDsoN54TATBgNVHSUEDDAKBggrBgEFBQcDATALBgNVHQ8EBAMCBaAwDQYJKoZIhvcNAQELBQADggIBANLG1anEKid4W87vQkqWaQTkRtFKJ2GFtBeMhvLhIyM6Cg3FdQnMZr0qr9mlV0w289pf/+M14J7S7SgsfwxMJvFbw9gZlwHvhBl24N349GuthshGO9P9eKmNPgyTJzTtw6FedXrrHV99nC7spaY84e+DqfHGYOzMJDrg8xHDYLLHk5Q2z5TlrztXMbtLhjPKrc2+ZajFFshgE5eowfkutSYxeX8uA5czFNT1ZxmDwX1KIelbqhh6XkMQFJui8v8Eo396/sN3RAQSfvBd7Syhch2vlaMP4FAB11AlMKO2x/1hoKiHBU3oU3OKRTfoUTfy1uH3T+t03k1Qkr0dqgHLxiv6QU5WrarR9tx/dapqbsSmrYapmJ7S5+ghc4FTWxXJB1cjJRh3X+gwJIHjOVW+5ZVqXTG2s2Jwi2daDt6XYeigxgL2SlQpeL5kvXNCcuSJurJVcRZFYUkzVv85XfDauqGxYqaehPcK2TzmcXOUWPfxQxLJd2TrqSiO+mseqqkNTb3ZDiYS/ZqdQoGYIUwJqXo+EDgqlmuWUhkWwCkyo4rtTZeAj+nP00v3n8JmXtO30Fip+lxpfsVR3tO1hk4Vi2kmVjXyRkW2G7D7WAVt+91ahFoSeRWlKyb4KcvGvwUaa43fWLem2hyI4di2pZdr3fcYJ3xvL5ejL3m14bKsfoOv"]
const sublime = "----- BEGIN LICENSE -----\n" +
    "MF#627\n" +
    "Single User License\n" +
    "EA7E-1262338-452690\n" +
    "ABB636F3 B81D12C8 72DB427A 676B673C\n" +
    "671C2A7B 8E66C0E1 DB0CB9A5 9C102D68\n" +
    "DFD5588D 6E0CC826 9CF2BAEB 6955CE03\n" +
    "16438A0A 358F31A2 91A5E0AC 8A1AFFCC\n" +
    "282221ED 8AD3B9CF DFB5E8BD D94E2271\n" +
    "5076A0D6 176DA088 919E65AB EBE0C128\n" +
    "92141E76 3D2DAA23 A9C85B6A 4090AC14\n" +
    "D56F6B1A 9743B02F 23497557 838490FB\n" +
    "------ END LICENSE ———"
const vmware = ["VMware Workstation 15 激活密钥：\n" +
"\n" +
"MA491-6NL5Q-AZAM0-ZH0N2-AAJ5A\n" +
"\n" +
"5A6F6-88247-XZH59-HL0Q6-8CD2V\n" +
"\n" +
"HF6QX-20187-2Z391-522NH-9AELT\n" +
"\n" +
"5F29M-48312-8ZDF9-A8A5K-2AM0Z\n" +
"\n" +
"UY758-0RXEQ-M81WP-8ZM7Z-Y3HDA\n" +
"\n" +
"VF750-4MX5Q-488DQ-9WZE9-ZY2D6\n" +
"\n" +
"UU54R-FVD91-488PP-7NNGC-ZFAX6\n" +
"\n" +
"YC74H-FGF92-081VZ-R5QNG-P6RY4\n" +
"\n" +
"YC34H-6WWDK-085MQ-JYPNX-NZRA2\n" +
"\n" +
"VMware Workstation 16 激活密钥：\n" +
"\n" +
"ZF3R0-FHED2-M80TY-8QYGC-NPKYF\n" +
"\n" +
"YF390-0HF8P-M81RQ-2DXQE-M2UT6\n" +
"\n" +
"ZF71R-DMX85-08DQY-8YMNC-PPHV8\n" +
"\n" +
"VMware workstation 17 激活密钥：\n" +
"\n" +
"JU090-6039P-08409-8J0QH-2YR7F\n" +
"\n" +
"ZF3R0-FHED2-M80TY-8QYGC-NPKYF\n" +
"\n" +
"FC7D0-D1YDL-M8DXZ-CYPZE-P2AY6\n" +
"\n" +
"ZC3TK-63GE6-481JY-WWW5T-Z7ATA\n" +
"\n" +
"1Z0G9-67285-FZG78-ZL3Q2-234JG\n" +
"\n" +
"4A4RR-813DK-M81A9-4U35H-06KND\n" +
"\n" +
"NZ4RR-FTK5H-H81C1-Q30QH-1V2LA\n" +
"\n" +
"JU090-6039P-08409-8J0QH-2YR7F\n" +
"\n" +
"4Y09U-AJK97-089Z0-A3054-83KLA\n" +
"\n" +
"4C21U-2KK9Q-M8130-4V2QH-CF810\n" +
"\n" +
"MC60H-DWHD5-H80U9-6V85M-8280D\n" +
"\n" +
"ZA30U-DXF84-4850Q-UMMXZ-W6K8F\n" +
"\n" +
"AC590-2XW97-48EFZ-TZPQE-MYHEA\n" +
"\n" +
"YF39K-DLFE5-H856Z-6NWZE-XQ2XD\n" +
"\n" +
"AC15R-FNZ16-H8DWQ-WFPNV-M28E2\n" +
"\n" +
"CZ1J8-A0D82-489LZ-ZMZQT-P3KX6"]
const windows = "一、windows10企业版\n" +
    "N2XRH-GCH84-MV34M-V9QT9-QV4X3\n" +
    "\n" +
    "MKNBD-QJGRF-JTTFM-Y9VP3-8K8XG\n" +
    "\n" +
    "KRNJX-22GXY-HCW46-MWYHY-YWRDB\n" +
    "\n" +
    "RDHTN-YFFKY-8YVR7-Q996Y-K74X3\n" +
    "\n" +
    "CGKNM-P2HMP-3DDXH-6G4MD-M7V3B\n" +
    "\n" +
    "NTWYF-W667M-GFJYK-Y29XP-XTMDQ\n" +
    "\n" +
    "VK7JG-NPHTM-C97JM-9MPGT-3V66T\n" +
    "\n" +
    "MH37W-N47XK-V7XM9-C7227-GCQG9\n" +
    "\n" +
    "NPPR9-FWDCX-D2C8J-H872K-2YT43\n" +
    "\n" +
    "W269N-WFGWX-YVC9B-4J6C9-T83GX\n" +
    "\n" +
    "NYW94-47Q7H-7X9TT-W7TXD-JTYPM\n" +
    "\n" +
    "NJ4MX-VQQ7Q-FP3DB-VDGHX-7XM87\n" +
    "\n" +
    "VK7JG-NPHTM-C97JM-9MPGT-3V66T\n" +
    "\n" +
    "NPPR9-FWDCX-D2C8J-H872K-2YT43\n" +
    "\n" +
    "DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4\n" +
    "\n" +
    "PBHCJ-Q2NYD-2PX34-T2TD6-233PK\n" +
    "\n" +
    "二、win10专业版\n" +
    "win10专业版永久激活密钥(32位和64位均可正常使用)：\n" +
    "\n" +
    "RNP9C-WY3PM-8WG94-WT8Q9-7XMPF\n" +
    "\n" +
    "GC42Q-XHW4P-6HKVD-D3839-P6W8B\n" +
    "\n" +
    "NJ4MX-VQQ7Q-FP3DB-VDGHX-7XM87\n" +
    "\n" +
    "MH37W-N47XK-V7XM9-C7227-GCQG9\n" +
    "\n" +
    "VK7JG-NPHTM-C97JM-9MPGT-3V66T\n" +
    "\n" +
    "7XKWN-VQ2RD-CXMHT-PH6FR-W8F9M\n" +
    "\n" +
    "DY3JJ-NHXTY-HF82D-YBDMH-BDWXM\n" +
    "\n" +
    "YV4JC-NMFHX-MGH3K-QKBPH-7QWXM\n" +
    "\n" +
    "NPGQ7-KFYYM-GXD98-MWF6H-FJRDB\n" +
    "\n" +
    "YF3NJ-PW7QQ-TG8HD-VTTC3-BG9TY\n" +
    "\n" +
    "HTNHD-QP67R-GMFM6-WR47H-HXMQB\n" +
    "\n" +
    "NPFQ6-F83HV-FX662-B2HGF-YTDGY\n" +
    "\n" +
    "P6QDR-86N7B-7FFDK-G7G4P-PGYQB\n" +
    "\n" +
    "NRC3M-HXFVP-B97RR-XDWDK-GJF9M\n" +
    "\n" +
    "BBTFN-6KXXM-VXBGV-694Q7-8HV22\n" +
    "\n" +
    "FNV7V-WJXXJ-2JQRC-V47VP-9QBW2\n" +
    "\n" +
    "X9NV3-MCH4F-M3G24-2PKR2-BTDT3\n" +
    "\n" +
    "W269N-WFGWX-YVC9B-4J6C9-T83GX\n" +
    "\n" +
    "W269N-WFGWX-YVC9B-4J6C9-T83GX\n" +
    "\n" +
    "VK7JG-NPHTM-C97JM-9MPGT-3V66T\n" +
    "\n" +
    "YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY\n" +
    "\n" +
    "2B87N-8KFHP-DKV6R-Y2C8J-PKCKT\n" +
    "\n" +
    "WGGHN-J84D6-QYCPR-T7PJ7-X766F\n" +
    "\n" +
    "BT79Q-G7N6G-PGBYW-4YWX6-6F4BT\n" +
    "\n" +
    "CB7QN-QWBVB-GKFKV-YW8PM-39MQB\n" +
    "\n" +
    "8C693-XNHDV-JXYF2-96Q3B-RC2KM\n" +
    "\n" +
    "G4KNB-BWRVQ-P2MPH-PV9WJ-JFG6Y\n" +
    "\n" +
    "C9VYQ-NJWDH-6Y78W-KWFJ3-H22KM\n" +
    "\n" +
    "N64MC-GT6XY-PWMJ7-6KDJ7-FJRDB\n" +
    "\n" +
    "PXW3C-WN8WF-R2BPB-FJPJ4-844DB\n" +
    "\n" +
    "MN66T-W2GPD-2TGK4-3CMMD-M7V3B\n" +
    "\n" +
    "QQ4NP-H4TPW-QHCHR-XD26C-Q3WXM\n" +
    "\n" +
    "9NQFH-BY439-7PQWC-7T9FB-88F9M\n" +
    "\n" +
    "JMFH9-NP9FR-PTGQ8-D2BC6-722KM\n" +
    "\n" +
    "RHFCW-WN22P-2VDRT-MH98X-C7JXM\n" +
    "\n" +
    "X7QH7-NY9Y7-PVCGM-6TF34-VMH3B\n" +
    "\n" +
    "MH37W-N47XK-V7XM9-C7227-GCQG9\n" +
    "\n" +
    "W269N-WFGWX-YVC9B-4J6C9-T83GX\n" +
    "\n" +
    "JPYNJ-XTFCR-372YJ-YJJ4Q-G83YB\n" +
    "\n" +
    "R3BYW-CBNWT-F3JTP-FM942-BTDXY\n" +
    "\n" +
    "KTNPV-KTRK4-3RRR8-39X6W-W44T3\n" +
    "\n" +
    "8N67H-M3CY9-QT7C4-2TR7M-TXYCV\n" +
    "\n" +
    "CKFK9-QNGF2-D34FM-99QX3-8XC4K\n" +
    "\n" +
    "JPYNH-XTFCR-372YJ-YJJ3Q-G83YB\n" +
    "\n" +
    "R3BYW-CBNWT-F3JTP-FM942-BTDXY\n" +
    "\n" +
    "M4JCC-YGNFV-GTKXX-F4WR9-66PKM\n" +
    "\n" +
    "2MNXF-67873-Y36D2-VT6DB-RC2KM\n" +
    "\n" +
    "三、常用笔记本激活码：\n" +
    "\n" +
    "戴尔 DELL 序列号： 342DG-6YJR8-X92GV-V7DCV-P4K27\n" +
    "\n" +
    "联想 LENOVO 序列号： 22TKD-F8XX6-YG69F-9M66D-PMJBM\n" +
    "\n" +
    "三星 SAMSUNG 序列号：49PB6-6BJ6Y-KHGCQ-7DDY6-TF7CD\n" +
    "\n" +
    "宏基 ACER 序列号： YKHFT-KW986-GK4PY-FDWYH-7TP9F或FJGCP-4DFJD-GJY49-VJBQ7-HYRR\n" +
    "\n" +
    "四、win10各版本密钥：\n" +
    "\n" +
    "1、神Key(适用各版本)：\n" +
    "\n" +
    "KH2J9-PC326-T44D4-39H6V-TVPBY\n" +
    "\n" +
    "TFP9Y-VCY3P-VVH3T-8XXCC-MF4YK\n" +
    "\n" +
    "236TW-X778T-8MV9F-937GT-QVKBB\n" +
    "\n" +
    "87VT2-FY2XW-F7K39-W3T8R-XMFGF\n" +
    "\n" +
    "6K2KY-BFH24-PJW6W-9GK29-TMPWP\n" +
    "\n" +
    "RHTBY-VWY6D-QJRJ9-JGQ3X-Q2289\n" +
    "\n" +
    "企业版：XGVPP-NMH47-7TTHJ-W3FW7-8HV2C\n" +
    "\n" +
    "教育版：YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY\n" +
    "\n" +
    "专业版N：2B87N-8KFHP-DKV6R-Y2C8J-PKCKT\n" +
    "\n" +
    "企业版N：WGGHN-J84D6-QYCPR-T7PJ7-X766F\n" +
    "\n" +
    "教育版N：84NGF-MHBT6-FXBX8-QWJK7-DRR8H\n" +
    "\n" +
    "企业版S：FWN7H-PF93Q-4GGP8-M8RF3-MDWWW\n" +
    "\n" +
    "单语言版：BT79Q-G7N6G-PGBYW-4YWX6-6F4BT\n" +
    "\n" +
    "Win10和Office 2016官方kms序列号激活密钥,win10 10240 KMS激活密钥\n" +
    "\n" +
    "先用win10预览版本的序列号去激活，如果还不行的话则可以使用这个序列号。\n" +
    "\n" +
    "2、通用版win10密匙：\n" +
    "\n" +
    "VK7JG-NPHTM-C97JM-9MPGT-3V66T\n" +
    "\n" +
    "NPPR9-FWDCX-D2C8J-H872K-2YT43\n" +
    "\n" +
    "W269N-WFGWX-YVC9B-4J6C9-T83GX\n" +
    "\n" +
    "NYW94-47Q7H-7X9TT-W7TXD-JTYPM\n" +
    "\n" +
    "NJ4MX-VQQ7Q-FP3DB-VDGHX-7XM87\n" +
    "\n" +
    "MH37W-N47XK-V7XM9-C7227-GCQG9\n" +
    "\n" +
    "VK7JG-NPHTM-C97JM-9MPGT-3V66T\n" +
    "\n" +
    "下面是各win10版本的序列号：\n" +
    "\n" +
    "win 10 Core Single Language:JPYNJ-XTFCR-372YJ-YJJ4Q-G83YB\n" +
    "\n" +
    "win 10 Core 中文版 Language Edition:R3BYW-CBNWT-F3JTP-FM942-BTDXY\n" +
    "\n" +
    "win 10 Core :KTNPV-KTRK4-3RRR8-39X6W-W44T3\n" +
    "\n" +
    "win 10 Pro:8N67H-M3CY9-QT7C4-2TR7M-TXYCV\n" +
    "\n" +
    "win 10 Enterprise:CKFK9-QNGF2-D34FM-99QX3-8XC4K\n" +
    "\n" +
    "win 10 Core Single Language :JPYNH-XTFCR-372YJ-YJJ3Q-G83YB\n" +
    "\n" +
    "win 10 Core Chinese Languange Edition:R3BYW-CBNWT-F3JTP-FM942-BTDXY\n" +
    "\n" +
    "win10企业版：\n" +
    "\n" +
    "win 10 Enterprise : NPPR9-FWDCX-D2C8J-H872K-2YT43\n" +
    "\n" +
    "win 10 Enterprise N: DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4\n" +
    "\n" +
    "win 10 Enterprise 2015 LTSB :WNMTR-4C88C-JK8YV-HQ7T2-76DF9\n" +
    "\n" +
    "win 10 Enterprise 2015 LTSB N : 2F77B-TNFGY-69QQF-B8YKP-D69TJ\n" +
    "\n" +
    "激活方法：\n" +
    "\n" +
    "系统安装完毕后，首先以管理员身份打开CMD命令行窗口，按下Win+X，选择命令提示符(管理员)。\n" +
    "\n" +
    "说明：kms.xspace.in是kms服务器地址，可能会失效，如果激活失败，可以自行搜索kms服务器地址，将kms.xspace.in替换成新的地址即可，比如换成kms.03k.org，参考可用的kms激活服务器有哪些\n" +
    "\n" +
    "win10专业版用户请依次输入：\n" +
    "\n" +
    "slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX\n" +
    "\n" +
    "slmgr /skms kms.03k.org\n" +
    "\n" +
    "slmgr /ato\n" +
    "\n" +
    "win10企业版用户请依次输入：\n" +
    "\n" +
    "slmgr /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43\n" +
    "\n" +
    "slmgr /skms kms.03k.org\n" +
    "\n" +
    "slmgr /ato\n" +
    "\n" +
    "win10家庭版用户依次输入：\n" +
    "\n" +
    "slmgr /ipk TX9XD-98N7V-6WMQ6-BX7FG-H8Q99\n" +
    "\n" +
    "slmgr /skms kms.03k.org\n" +
    "\n" +
    "slmgr /ato\n" +
    "\n" +
    "\n"
// nav list
const listData = ref([
  {'data' : "jb全家桶" , "key" : 1},
  {'data' : 'sublimeText' , "key" : 2 },
  {'data' : 'vmware虚拟机' , "key" : 3},
  {'data' : 'windows激活码' , "key" : 4},
])

const dataList = {
  "jb全家桶" : jetbrains,
  "sublimeText" : sublime,
  "vmware虚拟机" : vmware,
  "windows激活码" : windows,
}
const dataRef = ref(dataList["jb全家桶"])
const changeData = (data) => {
//   判断传入的data是否在dataList中
  if (dataList[data]) {
    document.querySelector("#data").innerText = dataList[data]
  }


}
</script>

<template>
  <div class="main">
    <div class="list" style="text-align: center">
      <a-tabs v-for="i  in listData" :key="i.key" :hoverable="true" style="list-style: none;float: left" ref="navRef">
        <a-list-item style="margin-left: 70px"  @click="changeData(i.data)">{{i.data}}</a-list-item>
      </a-tabs>
      </div>
      <br>
    </div>
  <br>
    <div class="card">
        <a-typography-text id="data" colspan="40" aria-rowspan="100" v-model="dataList['jb全家桶']" :ref="dataRef" style="height: auto;width: 400px">{{dataList["jb全家桶"]}}</a-typography-text>
    </div>
</template>

<style scoped>

</style>