json.extract! loan, :id, :startTime, :principal, :interest, :property_id, :created_at, :updated_at
json.url loan_url(loan, format: :json)