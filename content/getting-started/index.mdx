#define _GNU_SOURCE
#define _LARGEFILE_SOURCE
#define _FILE_OFFSET_BITS 64

#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include <errno.h>
#include <getopt.h>
#include <fcntl.h>

/**
 * Name........: statsprocessor (sp)
 * Description.: Word-generator based on per-position markov-chains
 * Version.....: 0.11
 * Autor.......: Jens Steube <jens.steube@gmail.com>
 * License.....: MIT
 */

#define CHARSIZ         0x100
#define OUTBUFSIZ       BUFSIZ

#define VERSION_BIN     11
#define PW_MIN          1
#define PW_MAX          64
#define THRESHOLD       0
#define SKIP            0
#define LIMIT           0
#define MARKOV_DISABLE  0
#define MARKOV_CLASSIC  0

typedef struct
{
  uint32_t key;
  uint64_t val;

} hcstat_table_t;

typedef struct
{
  uint32_t cs_buf[CHARSIZ];
  uint32_t cs_uniq[CHARSIZ];
  uint32_t cs_len;

} cs_t;

static const char *USAGE_MINI[] =
{
  "Usage: %s [options]... hcstat-file [filter-mask]",
  "",
  "Try --help for more help.",
  NULL
};

static const char *USAGE_BIG[] =
{
  "sp by atom, High-Performance word generator based on hashcat markov stats",
  "",
  "Usage: %s [options]... hcstat-file [filter-mask]",
  "",
  "* Startup:",
  "",
  "  -V,  --version             Print version",
  "  -h,  --help                Print help",
  "",
  "* Increment:",
  "",
  "       --pw-min=NUM          Start incrementing at NUM",
  "       --pw-max=NUM          Stop incrementing at NUM",
  "",
  "* Markov:",
  "",
  "       --markov-disable      Emulates maskprocessor output",
  "       --markov-classic      No per-position tables",
  "       --threshold=NUM       Filter out chars after NUM chars added",
  "                             Set to 0 to disable",
  "",
  "* Misc:",
  "",
  "       --combinations        Calculate number of combinations",
  "       --hex-charset         Assume charset is given in hex",
  "",
  "* Resources:",
  "",
  "  -s,  --skip=NUM            skip number of words (for restore)",
  "  -l,  --limit=NUM           limit number of words (for distributed)",
  "",
  "* Files:",
  "",
  "  -o,  --output-file=FILE    Output-file",
  "",
  "* Custom charsets:",
  "",
  "  -1,  --custom-charset1=CS  User-defineable charsets",
  "  -2,  --custom-charset2=CS  Example:",
  "  -3,  --custom-charset3=CS  --custom-charset1=?dabcdef",
  "  -4,  --custom-charset4=CS  sets charset ?1 to 0123456789abcdef",
  "",
  "* Built-in charsets:",
  "",
  "  ?l = abcdefghijklmnopqrstuvwxyz",
  "  ?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "  ?d = 0123456789",
  "  ?s =  !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  "  ?a = ?l?u?d?s",
  "  ?h = 8 bit characters from 0xc0 - 0xff",
  "  ?D = 8 bit characters from german alphabet",
  "  ?F = 8 bit characters from french alphabet",
  "  ?R = 8 bit characters from russian alphabet",
  "",
  NULL
};

static void usage_mini_print (const char *progname)
{
  int i;

  for (i = 0; USAGE_MINI[i] != NULL; i++)
  {
    printf (USAGE_MINI[i], progname);

    #ifdef OSX
    putchar ('\n');
    #endif

    #ifdef LINUX
    putchar ('\n');
    #endif

    #ifdef WINDOWS
    putchar ('\r');
    putchar ('\n');
    #endif
  }
}

static void usage_big_print (const char *progname)
{
  int i;

  for (i = 0; USAGE_BIG[i] != NULL; i++)
  {
    printf (USAGE_BIG[i], progname);

    #ifdef OSX
    putchar ('\n');
    #endif

    #ifdef LINUX
    putchar ('\n');
    #endif

    #ifdef WINDOWS
    putchar ('\r');
    putchar ('\n');
    #endif
  }
}

static char hex_convert (char c)
{
  return (c & 15) + (c >> 6) * 9;
}

static void add_cs_buf (const uint8_t *in_buf, const uint32_t in_len, cs_t *css_buf, const uint32_t css_idx)
{
  uint32_t i;

  for (i = 0; i < in_len; i++)
  {
    uint32_t u = in_buf[i];

    if (css_buf[css_idx].cs_uniq[u] == 1) continue;

    css_buf[css_idx].cs_uniq[u] = 1;

    css_buf[css_idx].cs_buf[css_buf[css_idx].cs_len] = u;

    css_buf[css_idx].cs_len++;
  }
}

static void mp_setup_sys (uint8_t **mp_sys)
{
  uint8_t pos;
  uint8_t chr;
  uint8_t donec[CHARSIZ];

  memset (donec, 0, sizeof (donec));

  for (pos = 0, chr =  'a'; chr <=  'z'; chr++) { donec[chr] = 1;
                                                  mp_sys[0][pos++] = chr; }

  for (pos = 0, chr =  'A'; chr <=  'Z'; chr++) { donec[chr] = 1;
                                                  mp_sys[1][pos++] = chr; }

  for (pos = 0, chr =  '0'; chr <=  '9'; chr++) { donec[chr] = 1;
                                                  mp_sys[2][pos++] = chr; }

  for (pos = 0, chr = 0x20; chr <= 0x7e; chr++) { if (donec[chr]) continue;
                                                  mp_sys[3][pos++] = chr; }

  for (pos = 0, chr = 0x20; chr <= 0x7e; chr++) { mp_sys[4][pos++] = chr; }


  #define HIGH_CNT 62
  #define DE_CNT   7
  #define FR_CNT   29
  #define RU_CNT   66

  uint8_t mp_sys_high[HIGH_CNT] =
  {
    0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xcb, 0xcc, 0xcd, 0xce, 0xcf,
    0xd0, 0xd1, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6,       0xd8, 0xd9, 0xda, 0xdb, 0xdc, 0xdd, 0xde, 0xdf,
    0xe0, 0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef,
    0xf0, 0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6,       0xf8, 0xf9, 0xfa, 0xfb, 0xfc, 0xfd, 0xfe, 0xff
  };

  uint8_t mp_sys_de[DE_CNT] = { 0xc4, 0xd6, 0xdc, 0xdf, 0xe4, 0xf6, 0xfc };
  uint8_t mp_sys_fr[FR_CNT] = { 0xc0, 0xc2, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xcb, 0xce, 0xcf, 0xd4, 0xd9, 0xdb, 0xdc, 0xe0, 0xe2, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xee, 0xef, 0xf4, 0xf9, 0xfb, 0xfc, 0xff };
  uint8_t mp_sys_ru[RU_CNT] = { 0xa1, 0xb0, 0xb1, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb, 0xbc, 0xbd, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xdb, 0xdc, 0xdd, 0xde, 0xdf, 0xe0, 0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef, 0xf1 };

  memcpy (mp_sys[5], mp_sys_high, sizeof (mp_sys_high));
  memcpy (mp_sys[6], mp_sys_de,   sizeof (mp_sys_de));
  memcpy (mp_sys[7], mp_sys_fr,   sizeof (mp_sys_fr));
  memcpy (mp_sys[8], mp_sys_ru,   sizeof (mp_sys_ru));
}

static uint32_t mp_expand (const uint8_t *in_buf, const uint32_t in_len, uint8_t *out_buf, uint8_t **mp_sys, uint32_t hex_charset)
{
  uint32_t out_len = 0;

  uint32_t in_pos;

  for (in_pos = 0; in_pos < in_len; in_pos++)
  {
    uint8_t p0 = in_buf[in_pos];

    if (p0 == '?')
    {
      in_pos++;

      uint8_t p1 = in_buf[in_pos];

      size_t mp_sys_len;

      switch (p1)
      {
        case 'l': mp_sys_len = strlen ((char *) mp_sys[0]);
                  memcpy (out_buf + out_len, mp_sys[0], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        case 'u': mp_sys_len = strlen ((char *) mp_sys[1]);
                  memcpy (out_buf + out_len, mp_sys[1], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        case 'd': mp_sys_len = strlen ((char *) mp_sys[2]);
                  memcpy (out_buf + out_len, mp_sys[2], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        case 's': mp_sys_len = strlen ((char *) mp_sys[3]);
                  memcpy (out_buf + out_len, mp_sys[3], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        case 'a': mp_sys_len = strlen ((char *) mp_sys[4]);
                  memcpy (out_buf + out_len, mp_sys[4], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        case 'h': mp_sys_len = strlen ((char *) mp_sys[5]);
                  memcpy (out_buf + out_len, mp_sys[5], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        case 'D': mp_sys_len = strlen ((char *) mp_sys[6]);
                  memcpy (out_buf + out_len, mp_sys[6], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        case 'F': mp_sys_len = strlen ((char *) mp_sys[7]);
                  memcpy (out_buf + out_len, mp_sys[7], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        case 'R': mp_sys_len = strlen ((char *) mp_sys[8]);
                  memcpy (out_buf + out_len, mp_sys[8], mp_sys_len);
                  out_len += mp_sys_len;
                  break;
        default:  fprintf (stderr, "ERROR: Syntax Error: %s\n", in_buf);
                  exit (-1);
      }
    }
    else
    {
      uint8_t c = 0;

      if (hex_charset)
      {
        in_pos++;

        if (in_pos == in_len) break;

        uint8_t p1 = in_buf[in_pos];

        c  = hex_convert (p1) << 0;
        c |= hex_convert (p0) << 4;
      }
      else
      {
        c = p0;
      }

      out_buf[out_len] = c;

      out_len += 1;
    }
  }

  return out_len;
}

static uint32_t mp_gen_css (const uint8_t *in_buf, const uint32_t in_len, uint8_t **mp_sys, uint8_t **mp_usr, cs_t *out_css, uint32_t hex_charset)
{
  uint32_t out_idx = 0;

  uint32_t in_pos;

  for (in_pos = 0; in_pos < in_len; in_pos++)
  {
    uint8_t p0 = in_buf[in_pos];

    if (p0 == '?')
    {
      in_pos++;

      uint8_t p1 = in_buf[in_pos];

      switch (p1)
      {
        case 'l': add_cs_buf (mp_sys[0], strlen ((char *) mp_sys[0]), out_css, out_idx);
                  out_idx++;
                  break;
        case 'u': add_cs_buf (mp_sys[1], strlen ((char *) mp_sys[1]), out_css, out_idx);
                  out_idx++;
                  break;
        case 'd': add_cs_buf (mp_sys[2], strlen ((char *) mp_sys[2]), out_css, out_idx);
                  out_idx++;
                  break;
        case 's': add_cs_buf (mp_sys[3], strlen ((char *) mp_sys[3]), out_css, out_idx);
                  out_idx++;
                  break;
        case 'a': add_cs_buf (mp_sys[4], strlen ((char *) mp_sys[4]), out_css, out_idx);
                  out_idx++;
                  break;
        case 'h': add_cs_buf (mp_sys[5], strlen ((char *) mp_sys[5]), out_css, out_idx);
                  out_idx++;
                  break;
        case 'D': add_cs_buf (mp_sys[6], strlen ((char *) mp_sys[6]), out_css, out_idx);
                  out_idx++;
                  break;
        case 'F': add_cs_buf (mp_sys[7], strlen ((char *) mp_sys[7]), out_css, out_idx);
                  out_idx++;
                  break;
        case 'R': add_cs_buf (mp_sys[8], strlen ((char *) mp_sys[8]), out_css, out_idx);
                  out_idx++;
                  break;
        case '1': add_cs_buf (mp_usr[0], strlen ((char *) mp_usr[0]), out_css, out_idx);
                  out_idx++;
                  break;
        case '2': add_cs_buf (mp_usr[1], strlen ((char *) mp_usr[1]), out_css, out_idx);
                  out_idx++;
                  break;
        case '3': add_cs_buf (mp_usr[2], strlen ((char *) mp_usr[2]), out_css, out_idx);
                  out_idx++;
                  break;
        case '4': add_cs_buf (mp_usr[3], strlen ((char *) mp_usr[3]), out_css, out_idx);
                  out_idx++;
                  break;
        default:  fprintf (stderr, "ERROR: Syntax Error: %s\n", in_buf);
                  return (0);
                  break;
      }
    }
    else
    {
      uint8_t c = 0;

      if (hex_charset)
      {
        in_pos++;

        if (in_pos == in_len) break;

        uint8_t p1 = in_buf[in_pos];

        c |= hex_convert (p1) << 0;
        c |= hex_convert (p0) << 4;
      }
      else
      {
        c = p0;
      }

      add_cs_buf (&c, 1, out_css, out_idx);

      out_idx++;
    }
  }

  return out_idx;
}

static int sp_comp_val (const void *p1, const void *p2)
{
  hcstat_table_t *b1 = (hcstat_table_t *) p1;
  hcstat_table_t *b2 = (hcstat_table_t *) p2;

  return b2->val - b1->val;
}

static uint64_t sp_get_sum (uint32_t start, uint32_t stop, cs_t *root_css_buf)
{
  uint64_t sum = 1;

  uint32_t i;

  for (i = start; i < stop; i++)
  {
    sum *= root_css_buf[i].cs_len;
  }

  return (sum);
}

static void sp_exec (uint64_t ctx, uint8_t *pw_buf, cs_t *root_css_buf, cs_t *markov_css_buf, uint32_t start, uint32_t stop)
{
  uint64_t v = ctx;

  cs_t *cs = &root_css_buf[start];

  uint32_t i;

  for (i = start; i < stop; i++)
  {
    const uint64_t m = v % cs->cs_len;
    const uint64_t d = v / cs->cs_len;

    v = d;

    const uint32_t k = cs->cs_buf[m];

    pw_buf[i] = (uint8_t) k;

    cs = &markov_css_buf[(i * CHARSIZ) + k];
  }
}

int main (int argc, char *argv[])
{
  uint32_t i, j, k;

  /* usage */

  uint32_t  version           = 0;
  uint32_t  usage             = 0;
  uint32_t  combinations      = 0;
  uint32_t  hex_charset       = 0;
  uint32_t  markov_disable    = 0;
  uint32_t  markov_classic    = 0;
  uint32_t  pw_min            = PW_MIN;
  uint32_t  pw_max            = PW_MAX;
  uint32_t  threshold         = THRESHOLD;
  uint64_t  skip              = SKIP;
  uint64_t  limit             = LIMIT;
  char     *output_file       = NULL;
  char     *custom_charset_1  = NULL;
  char     *custom_charset_2  = NULL;
  char     *custom_charset_3  = NULL;
  char     *custom_charset_4  = NULL;

  #define IDX_HEX_CHARSET       0
  #define IDX_VERSION           'V'
  #define IDX_USAGE             'h'
  #define IDX_COMBINATIONS      1
  #define IDX_PW_MIN            2
  #define IDX_PW_MAX            3
  #define IDX_MARKOV_DISABLE    4
  #define IDX_MARKOV_CLASSIC    5
  #define IDX_THRESHOLD         't'
  #define IDX_SKIP              's'
  #define IDX_LIMIT             'l'
  #define IDX_OUTPUT_FILE       'o'
  #define IDX_CUSTOM_CHARSET_1  '1'
  #define IDX_CUSTOM_CHARSET_2  '2'
  #define IDX_CUSTOM_CHARSET_3  '3'
  #define IDX_CUSTOM_CHARSET_4  '4'

  struct option long_options[] =
  {
    {"version",         no_argument,       0, IDX_VERSION},
    {"help",            no_argument,       0, IDX_USAGE},
    {"combinations",    no_argument,       0, IDX_COMBINATIONS},
    {"hex-charset",     no_argument,       0, IDX_HEX_CHARSET},
    {"markov-disable",  no_argument,       0, IDX_MARKOV_DISABLE},
    {"markov-classic",  no_argument,       0, IDX_MARKOV_CLASSIC},
    {"pw-min",          required_argument, 0, IDX_PW_MIN},
    {"pw-max",          required_argument, 0, IDX_PW_MAX},
    {"threshold",       required_argument, 0, IDX_THRESHOLD},
    {"output-file",     required_argument, 0, IDX_OUTPUT_FILE},
    {"skip",            required_argument, 0, IDX_SKIP},
    {"limit",           required_argument, 0, IDX_LIMIT},
    {"custom-charset1", required_argument, 0, IDX_CUSTOM_CHARSET_1},
    {"custom-charset2", required_argument, 0, IDX_CUSTOM_CHARSET_2},
    {"custom-charset3", required_argument, 0, IDX_CUSTOM_CHARSET_3},
    {"custom-charset4", required_argument, 0, IDX_CUSTOM_CHARSET_4},
    {0, 0, 0, 0}
  };

  int option_index = 0;

  int c;

  while ((c = getopt_long (argc, argv, "Vht:o:s:l:1:2:3:4:", long_options, &option_index)) != -1)
  {
    switch (c)
    {
      case IDX_VERSION:           version           = 1;              break;
      case IDX_USAGE:             usage             = 1;              break;
      case IDX_HEX_CHARSET:       hex_charset       = 1;              break;
      case IDX_COMBINATIONS:      combinations      = 1;              break;
      case IDX_MARKOV_DISABLE:    markov_disable    = 1;              break;
      case IDX_MARKOV_CLASSIC:    markov_classic    = 1;              break;
      case IDX_PW_MIN:            pw_min            = atoi (optarg);  break;
      case IDX_PW_MAX:            pw_max            = atoi (optarg);  break;
      case IDX_THRESHOLD:         threshold         = atoi (optarg);  break;
      case IDX_OUTPUT_FILE:       output_file       = optarg;         break;
      case IDX_SKIP:              skip              = atoll (optarg); break;
      case IDX_LIMIT:             limit             = atoll (optarg); break;
      case IDX_CUSTOM_CHARSET_1:  custom_charset_1  = optarg;         break;
      case IDX_CUSTOM_CHARSET_2:  custom_charset_2  = optarg;         break;
      case IDX_CUSTOM_CHARSET_3:  custom_charset_3  = optarg;         break;
      case IDX_CUSTOM_CHARSET_4:  custom_charset_4  = optarg;         break;

      default: return (-1);
    }
  }

  if (usage)
  {
    usage_big_print (argv[0]);

    return (-1);
  }

  if (version)
  {
    printf ("v%4.03f\n", (double) VERSION_BIN / 1000);

    return (-1);
  }

  if ((argc != (optind + 1)) && (argc != (optind + 2)))
  {
    usage_mini_print (argv[0]);

    return (-1);
  }

  char *hcstat = argv[optind + 0];

  char *mask_buf = (argc == (optind + 1)) ? "?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a" : argv[optind + 1];

  /* generate css for mask */

  uint8_t *mp_sys[9];

  mp_sys[0] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_sys[1] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_sys[2] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_sys[3] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_sys[4] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_sys[5] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_sys[6] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_sys[7] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_sys[8] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));

  uint8_t *mp_usr[4];

  mp_usr[0] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_usr[1] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_usr[2] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));
  mp_usr[3] = (uint8_t *) calloc (CHARSIZ, sizeof (uint8_t));

  mp_setup_sys (mp_sys);

  if (custom_charset_1) mp_expand ((uint8_t *) custom_charset_1, strlen (custom_charset_1), mp_usr[0], mp_sys, hex_charset);
  if (custom_charset_2) mp_expand ((uint8_t *) custom_charset_2, strlen (custom_charset_2), mp_usr[1], mp_sys, hex_charset);
  if (custom_charset_3) mp_expand ((uint8_t *) custom_charset_3, strlen (custom_charset_3), mp_usr[2], mp_sys, hex_charset);
  if (custom_charset_4) mp_expand ((uint8_t *) custom_charset_4, strlen (custom_charset_4), mp_usr[3], mp_sys, hex_charset);

  cs_t *mask_css = (cs_t *) calloc (PW_MAX, sizeof (cs_t));

  uint32_t mask_idx = mp_gen_css ((uint8_t *) mask_buf, strlen (mask_buf), mp_sys, mp_usr, mask_css, hex_charset);

  #define MIN(a,b) ((a) < (b)) ? (a) : (b);
  #define MAX(a,b) ((a) > (b)) ? (a) : (b);

  pw_max = MIN (pw_max, mask_idx);

  /* files out */

  #ifdef WINDOWS
  setmode (fileno (stdout), O_BINARY);
  setmode (fileno (stderr), O_BINARY);
  #endif

  FILE *fp_out = stdout;

  if (output_file)
  {
    if ((fp_out = fopen (output_file, "ab")) == NULL)
    {
      fprintf (stderr, "ERROR: %s: %s\n", output_file, strerror (errno));

      return (-1);
    }
  }

  setbuf (fp_out, NULL);

  /* buffers */

  uint8_t *out_buf = (uint8_t *) malloc (OUTBUFSIZ + OUTBUFSIZ);

  /**
   * Initialize hcstats
   */

  const uint32_t root_cnt = PW_MAX * CHARSIZ;

  uint64_t *root_stats_buf = (uint64_t *) calloc (root_cnt, sizeof (uint64_t));

  uint64_t *root_stats_ptr = root_stats_buf;

  uint64_t *root_stats_buf_by_pos[PW_MAX];

  for (i = 0; i < PW_MAX; i++)
  {
    root_stats_buf_by_pos[i] = root_stats_ptr;

    root_stats_ptr += CHARSIZ;
  }

  const uint32_t markov_cnt = PW_MAX * CHARSIZ * CHARSIZ;

  uint64_t *markov_stats_buf = (uint64_t *) calloc (markov_cnt, sizeof (uint64_t));

  uint64_t *markov_stats_ptr = markov_stats_buf;

  uint64_t *markov_stats_buf_by_key[PW_MAX][CHARSIZ];

  for (i = 0; i < PW_MAX; i++)
  {
    for (j = 0; j < CHARSIZ; j++)
    {
      markov_stats_buf_by_key[i][j] = markov_stats_ptr;

      markov_stats_ptr += CHARSIZ;
    }
  }

  /**
   * Load hcstats File
   */

  FILE *fd = fopen (hcstat, "rb");

  if (fd == NULL)
  {
    fprintf (stderr, "%s: %s\n", hcstat, strerror (errno));

    return (-1);
  }

  if (fread (root_stats_buf, sizeof (uint64_t), root_cnt, fd) != root_cnt)
  {
    fprintf (stderr, "%s: Could not load data\n", hcstat);

    return (-1);
  }

  if (fread (markov_stats_buf, sizeof (uint64_t), markov_cnt, fd) != markov_cnt)
  {
    fprintf (stderr, "%s: Could not load data\n", hcstat);

    return (-1);
  }

  fclose (fd);

  /**
   * Markov modifier of hcstat_table on user request
   */

  if (markov_disable)
  {
    memset (root_stats_buf,   0, root_cnt   * sizeof (uint64_t));
    memset (markov_stats_buf, 0, markov_cnt * sizeof (uint64_t));
  }

  if (markov_classic)
  {
    /* Add all stats to first position */

    for (i = 1; i < PW_MAX; i++)
    {
      uint64_t *out = root_stats_buf_by_pos[0];
      uint64_t *in  = root_stats_buf_by_pos[i];

      for (j = 0; j < CHARSIZ; j++)
      {
        *out++ += *in++;
      }
    }

    for (i = 1; i < PW_MAX; i++)
    {
      uint64_t *out = markov_stats_buf_by_key[0][0];
      uint64_t *in  = markov_stats_buf_by_key[i][0];

      for (j = 0; j < CHARSIZ; j++)
      {
        for (k = 0; k < CHARSIZ; k++)
        {
          *out++ += *in++;
        }
      }
    }

    /* copy them to all pw_positions */

    for (i = 1; i < PW_MAX; i++)
    {
      memcpy (root_stats_buf_by_pos[i], root_stats_buf_by_pos[0], CHARSIZ * sizeof (uint64_t));
    }

    for (i = 1; i < PW_MAX; i++)
    {
      memcpy (markov_stats_buf_by_key[i][0], markov_stats_buf_by_key[0][0], CHARSIZ * CHARSIZ * sizeof (uint64_t));
    }
  }

  /**
   * Initialize tables
   */

  hcstat_table_t *root_table_buf = (hcstat_table_t *) calloc (root_cnt, sizeof (hcstat_table_t));

  hcstat_table_t *root_table_ptr = root_table_buf;

  hcstat_table_t *root_table_buf_by_pos[PW_MAX];

  for (i = 0; i < PW_MAX; i++)
  {
    root_table_buf_by_pos[i] = root_table_ptr;

    root_table_ptr += CHARSIZ;
  }

  hcstat_table_t *markov_table_buf = (hcstat_table_t *) calloc (markov_cnt, sizeof (hcstat_table_t));

  hcstat_table_t *markov_table_ptr = markov_table_buf;

  hcstat_table_t *markov_table_buf_by_key[PW_MAX][CHARSIZ];

  for (i = 0; i < PW_MAX; i++)
  {
    for (j = 0; j < CHARSIZ; j++)
    {
      markov_table_buf_by_key[i][j] = markov_table_ptr;

      markov_table_ptr += CHARSIZ;
    }
  }

  /**
   * Convert hcstat to tables
   */

  for (i = 0; i < root_cnt; i++)
  {
    uint32_t key = i % CHARSIZ;

    root_table_buf[i].key = key;
    root_table_buf[i].val = root_stats_buf[i];
  }

  for (i = 0; i < markov_cnt; i++)
  {
    uint32_t key = i % CHARSIZ;

    markov_table_buf[i].key = key;
    markov_table_buf[i].val = markov_stats_buf[i];
  }

  free (root_stats_buf);
  free (markov_stats_buf);

  /**
   * Finally sort them
   */

  for (i = 0; i < PW_MAX; i++)
  {
    qsort (root_table_buf_by_pos[i], CHARSIZ, sizeof (hcstat_table_t), sp_comp_val);
  }

  for (i = 0; i < PW_MAX; i++)
  {
    for (j = 0; j < CHARSIZ; j++)
    {
      qsort (markov_table_buf_by_key[i][j], CHARSIZ, sizeof (hcstat_table_t), sp_comp_val);
    }
  }

  /**
   * enable bf by setting threshold to CHARSIZ
   */

  threshold = (threshold != 0) ? threshold : CHARSIZ;

  /**
   * Convert tables to css
   */

  cs_t *root_css_buf = (cs_t *) calloc (PW_MAX, sizeof (cs_t));

  cs_t *markov_css_buf = (cs_t *) calloc (PW_MAX * CHARSIZ, sizeof (cs_t));

  for (i = 0; i < root_cnt; i++)
  {
    uint32_t pw_pos = i / CHARSIZ;

    cs_t *cs = &root_css_buf[pw_pos];

    if (cs->cs_len == threshold) continue;

    uint32_t key = root_table_buf[i].key;

    if (mask_css[pw_pos].cs_uniq[key] == 0) continue;

    cs->cs_buf[cs->cs_len] = key;

    cs->cs_len++;
  }

  for (i = 0; i < markov_cnt; i++)
  {
    uint32_t c = i / CHARSIZ;

    cs_t *cs = &markov_css_buf[c];

    if (cs->cs_len == threshold) continue;

    uint32_t key = markov_table_buf[i].key;

    uint32_t pw_pos = c / CHARSIZ;

    if ((pw_pos + 1) < PW_MAX) if (mask_css[pw_pos + 1].cs_uniq[key] == 0) continue;

    cs->cs_buf[cs->cs_len] = key;

    cs->cs_len++;
  }

  /**
   * Calculate number of combinations and quit
   */

  if (combinations)
  {
    uint64_t cnt = 0;

    uint32_t pw_len;

    for (pw_len = pw_min; pw_len <= pw_max; pw_len++)
    {
      cnt += sp_get_sum (0, pw_len, root_css_buf);
    }

    #ifdef OSX
    printf ("%llu\n", (long long unsigned int) cnt);
    #endif

    #ifdef LINUX
    printf ("%llu\n", (long long unsigned int) cnt);
    #endif

    #ifdef WINDOWS
    printf ("%I64u\n", (long long unsigned int) cnt);
    #endif

    return (0);
  }

  /**
   * Start generator code
   */

  uint8_t *pw_buf = (uint8_t *) calloc (PW_MAX, sizeof (uint8_t));

  uint32_t pw_len;

  for (pw_len = pw_min; pw_len <= pw_max; pw_len++)
  {
    /**
     * initialize pw_buf
     */

    #ifdef OSX
    pw_buf[pw_len] = '\n';

    uint32_t out_len = pw_len + 1;
    #endif

    #ifdef LINUX
    pw_buf[pw_len] = '\n';

    uint32_t out_len = pw_len + 1;
    #endif

    #ifdef WINDOWS
    pw_buf[pw_len + 0] = '\r';
    pw_buf[pw_len + 1] = '\n';

    uint32_t out_len = pw_len + 1 + 1;
    #endif

    /**
     * loop through that length
     */

    uint32_t r_len;
    uint32_t l_len;

    switch (pw_len)
    {
      case 1:   l_len = 1;
                break;
      case 2:   l_len = 1;
                break;
      case 3:   l_len = 1;
                break;
      case 4:   l_len = 1;
                break;
      case 5:   l_len = 1;
                break;
      case 6:   l_len = 2;
                break;
      case 7:   l_len = 2;
                break;
      case 8:   l_len = 2;
                break;
      case 9:   l_len = 3;
                break;
      default:  l_len = 4;
                break;
    }

    r_len = pw_len - l_len;

    uint64_t l_cnt = sp_get_sum (0,     l_len,         root_css_buf);
    uint64_t r_cnt = sp_get_sum (l_len, l_len + r_len, root_css_buf);

    uint64_t l_ctx_min = 0;
    uint64_t r_ctx_min = 0;

    if (skip)
    {
      uint64_t skip_total = l_cnt * r_cnt;

      if (skip_total <= skip)
      {
        skip  -= skip_total;
        limit -= skip_total;

        continue;
      }

      l_ctx_min = skip / r_cnt;
      r_ctx_min = skip % r_cnt;

      skip = 0;
    }

    uint64_t l_ctx_max = l_cnt;
    uint64_t r_ctx_max = r_cnt;

    uint8_t last_iter = 0;

    if (limit)
    {
      uint64_t limit_total = l_cnt * r_cnt;

      if (limit_total < limit)
      {
        limit -= limit_total;
      }
      else
      {
        l_ctx_max = limit / r_cnt;
        r_ctx_max = limit % r_cnt;

        if      (r_ctx_max)              l_ctx_max++;
        else if (r_ctx_min == r_ctx_max) l_ctx_max++;

        last_iter = 1;
      }
    }

    uint64_t r_ctx_remain = 0;

    if (r_ctx_min > r_ctx_max)
    {
      r_ctx_remain = r_ctx_max;

      r_ctx_max = r_cnt;
    }

    uint64_t l_ctx;

    for (l_ctx = l_ctx_min; l_ctx < l_ctx_max; l_ctx++)
    {
      sp_exec (l_ctx, pw_buf, root_css_buf, markov_css_buf, 0, l_len);

      uint32_t out_pos = 0;

      uint64_t r_ctx;

      if (l_ctx == (l_ctx_max - 1))
      {
        if (r_ctx_remain != 0)
        {
          r_ctx_max = r_ctx_remain;
        }
      }

      for (r_ctx = r_ctx_min; r_ctx < r_ctx_max; r_ctx++)
      {
        sp_exec (r_ctx, pw_buf, root_css_buf, markov_css_buf, l_len, l_len + r_len);

        memcpy (out_buf + out_pos, pw_buf, out_len);

        out_pos += out_len;

        if (out_pos < OUTBUFSIZ) continue;

        fwrite (out_buf, 1, out_pos, fp_out);

        out_pos = 0;
      }

      fwrite (out_buf, 1, out_pos, fp_out);

      r_ctx_min = 0;
      r_ctx_max = r_cnt;
    }

    l_ctx_min = 0;
    l_ctx_max = l_cnt;

    if (last_iter) break;
  }

  if (fp_out != stdout) fclose (fp_out);

  return 0;
}
