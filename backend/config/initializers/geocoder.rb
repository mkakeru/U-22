Geocoder.configure(
  :language  => :ja,
  lookup: :google,
  api_key: Rails.application.credentials.geocoding[:GOOGLE_MAP_API]
)
