import {
  Document,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";

// Styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: "#16a34a",
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#16a34a",
    marginBottom: 10,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#22c55e",
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  list: {
    marginLeft: 20,
    marginTop: 5,
  },
  listItem: {
    fontSize: 11,
    marginBottom: 5,
  },
  pageBreak: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 20,
  },
});

export default function PdfTemplate() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.header}>Kashmir Tour Package</Text>

        {/* About Us */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.text}>
            Welcome to our Kashmir tour package. Experience the beauty of
            paradise on earth with our carefully curated itinerary.
          </Text>
        </View>

        {/* Itinerary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📍 Itinerary</Text>

          <Text style={[styles.text, styles.bold]}>
            Day 1: Arrival in Srinagar
          </Text>
          <Text style={styles.text}>
            • Arrival at Srinagar Airport{"\n"}• Transfer to houseboat{"\n"}•
            Shikara ride on Dal Lake{"\n"}• Overnight stay at houseboat
          </Text>

          <Text style={[styles.text, styles.bold]}>
            Day 2: Srinagar Sightseeing
          </Text>
          <Text style={styles.text}>
            • Visit Mughal Gardens{"\n"}• Nishat Bagh and Shalimar Bagh{"\n"}•
            Shankaracharya Temple{"\n"}• Evening free for shopping
          </Text>

          <Text style={[styles.text, styles.bold]}>
            Day 3: Gulmarg Excursion
          </Text>
          <Text style={styles.text}>
            • Day trip to Gulmarg{"\n"}• Gondola ride (cable car){"\n"}• Snow
            activities{"\n"}• Return to Srinagar
          </Text>
        </View>
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={styles.page}>
        {/* Inclusion & Exclusion */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✓ Tour Details</Text>

          <Text style={[styles.text, styles.bold]}>Inclusions:</Text>
          <Text style={styles.text}>
            • Accommodation in hotels/houseboats{"\n"}• Daily breakfast and
            dinner{"\n"}• All transfers and sightseeing by private vehicle{"\n"}
            • Shikara ride on Dal Lake{"\n"}• All toll taxes and parking charges
          </Text>

          <Text style={[styles.text, styles.bold, { marginTop: 15 }]}>
            Exclusions:
          </Text>
          <Text style={styles.text}>
            • Air fare / train tickets{"\n"}• Lunch during the tour{"\n"}• Entry
            fees to monuments{"\n"}• Personal expenses{"\n"}• Any services not
            mentioned in inclusions
          </Text>
        </View>

        {/* Terms & Conditions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📜 Terms & Conditions</Text>

          <Text style={styles.text}>
            1. Booking must be confirmed with 25% advance payment{"\n"}
            2. Balance payment 7 days before tour start date{"\n"}
            3. Cancellation charges apply as per policy{"\n"}
            4. Hotels subject to availability{"\n"}
            5. Itinerary may change due to weather conditions{"\n"}
            6. ID proof mandatory for all travelers{"\n"}
            7. Company not responsible for loss of belongings
          </Text>
        </View>

        {/* Footer */}
        <View style={{ position: "absolute", bottom: 30, left: 40, right: 40 }}>
          <Text style={{ fontSize: 10, textAlign: "center", color: "#666" }}>
            For bookings contact: +91 1234567890 | email@example.com
          </Text>
        </View>
      </Page>
    </Document>
  );
}
